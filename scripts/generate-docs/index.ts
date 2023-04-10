import * as colorette from 'colorette';
import consola from 'consola';
import fg from 'fast-glob';
import fs from 'fs-extra';
import _jiti from 'jiti';
import path from 'node:path';
import { createDocMdx } from './helpers';

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
}

main();
