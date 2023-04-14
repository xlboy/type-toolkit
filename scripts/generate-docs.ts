import * as colorette from 'colorette';
import consola from 'consola';
import fg from 'fast-glob';
import fs from 'fs-extra';
import _jiti from 'jiti';
import path from 'node:path';
import * as tz from '@type-zen/core'

// According to the configuration in src `*.docs.ts` to generate documents
function main() {
  const cwd = process.cwd();
  const docsConfigFilePaths = fg.sync(['src/**/*.docs.ts'], { cwd, absolute: true });
  const docsDirPath = {
    en: path.resolve(cwd, 'docs/docs'),
    zh: path.resolve(cwd, 'docs/i18n/zh/docusaurus-plugin-content-docs/current')
  };
  const jiti = _jiti(cwd);

  docsConfigFilePaths.forEach(async docsConfigFilePath => {
    const docsConfig: DocumentConfig = await jiti(
      './' + path.relative(cwd, docsConfigFilePath)
    ).default;

    const zh = {
      mdx: createDocMdx('zh', docsConfig),
      outputFilePath: path.resolve(docsDirPath.zh, docsConfig.outputFilePath)
    };
    const en = {
      mdx: createDocMdx('en', docsConfig),
      outputFilePath: path.resolve(docsDirPath.en, docsConfig.outputFilePath)
    };

    fs.ensureDirSync(path.dirname(zh.outputFilePath));
    fs.writeFileSync(zh.outputFilePath, zh.mdx);

    fs.ensureDirSync(path.dirname(en.outputFilePath));
    fs.writeFileSync(en.outputFilePath, en.mdx);

    consola.success(
      `Generated: \n      ${colorette.blue(
        path.relative(cwd, zh.outputFilePath)
      )}\n      ${colorette.blue(path.relative(cwd, en.outputFilePath))}`
    );
  });

  return;

  function createDocMdx(locale: Locale, docsConfig: DocumentConfig) {
    const params = docsConfig.params.map(param => {
      return {
        ...param,
        description: param.description[locale],
        type: param.type && filterType(param.type),
        default: param.default && filterType(param.default)
      };
    });
    const titleText = {
      params: { zh: '参数', en: 'Parameters' },
      returnValue: { zh: '返回值', en: 'Return Value' },
      playground: { zh: '游乐场', en: 'Playground' }
    };

    const returnValue = docsConfig.return
      ? {
          ...docsConfig.return,
          description: docsConfig.return.description[locale]
        }
      : null;

    return `---
slug: /${docsConfig.setting.slug}
title: ${docsConfig.setting.title}
---

import ParamTable from '@site/src/components/ParamTable';
import ReturnValue from '@site/src/components/ReturnValue';
import Playground from '@site/src/components/Playground';

${docsConfig.description[locale]}

### ${titleText.params[locale]}
<ParamTable data={${JSON.stringify(params)}} />

### ${titleText.returnValue[locale]}
<ReturnValue data={${JSON.stringify(returnValue)}} />

### ${titleText.playground[locale]}

<Playground tzenFilePath={"${docsConfig.sourceFilePath}"} testFilePath={"${
      docsConfig.testFilePath
    }"} exampleCode={${JSON.stringify(docsConfig.example.trimStart().trimEnd())}} />

`;
  }

  function filterType(data: NonNullable<DocumentConfigParam['type']>) {
    if (typeof data === 'string') return data;

    // see `/docs/src/components/common/Type/index.tsx#L13-L17`
    return {
      name: data.name,
      link:
        'https://github.com/xlboy/type-toolkit/blob/master/src/' +
        data.code.filePath +
        '#L' +
        data.code.line[0] +
        '-L' +
        data.code.line[1],
      code: fs
        .readFileSync(path.resolve(process.cwd(), `./src/${data.code.filePath}`), 'utf-8')
        .split('\n')
        .slice(data.code.line[0] - 1, data.code.line[1])
        .join('\n')
    };
  }
}

// 1. Extract the contents of `.tzen` and `.ts` files in the src directory into JSON format.
// 2. When extracting `.tzen` files, compile them and then extract the compiled contents into the corresponding `.d.ts` files.
function generateSourceJSON() {
  const cwd = process.cwd();
  const filePaths = fg.sync(['src/**/*.tzen', 'src/**/*.ts'], {
    cwd,
    absolute: true,
    ignore: ['src/**/*.{jsdoc,docs}.ts']
  });
  const source: Record</* file-path */ string, /* file-content */ string> = {};

  const sourceJSONFilePath = path.resolve(cwd, './docs/static/source.json');

  fs.ensureFileSync(sourceJSONFilePath);

  filePaths.forEach(filePath => {
    const relativePathInSrc = path.relative(path.resolve(cwd, 'src'), filePath);

    if (filePath.endsWith('.ts')) {
      source[relativePathInSrc] = fs.readFileSync(filePath, 'utf-8');
      return;
    }

    const tzenFilePath = filePath;
    const tzenFileContent = fs.readFileSync(tzenFilePath, 'utf-8');
    source[relativePathInSrc] = tzenFileContent;

    try {
      const ast = new tz.Parser().parse(tzenFileContent);

      if (ast && ast.length) {
        const compiledText =
          '// @ts-nocheck\n\n' + new tz.Compiler().compile(ast).toText();

        source[`${relativePathInSrc}.d.ts`] = compiledText;
      }
    } catch (error) {
      consola.error('Error while parsing file: ' + tzenFilePath);
      throw error;
    }
  });

  fs.writeJSONSync(sourceJSONFilePath, source, { spaces: 2 });
  consola.success('Generated: ' + colorette.blue(path.relative(cwd, sourceJSONFilePath)));
  return;
}

main();
generateSourceJSON();
