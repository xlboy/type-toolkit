import * as colorette from 'colorette';
import consola from 'consola';
import fg from 'fast-glob';
import fs from 'fs-extra';
import _jiti from 'jiti';
import path from 'node:path';

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
      example: { zh: '示例', en: 'Example' }
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

${docsConfig.description[locale]}

### ${titleText.params[locale]}
<ParamTable data={${JSON.stringify(params)}} />

### ${titleText.returnValue[locale]}
<ReturnValue data={${JSON.stringify(returnValue)}} />

### ${titleText.example[locale]}

\`\`\`ts
${docsConfig.example.trimStart().trimEnd()}
\`\`\`
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

main();
