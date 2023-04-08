import fg from 'fast-glob';
import fs from 'fs-extra';
import path from 'node:path';
import * as tz from '@type-zen/core';
import consola from 'consola';
import _ from 'lodash-es';

function main() {
  const cwd = process.cwd();
  const mdxFilePaths = fg.sync(['src/**/*.mdx'], { cwd, absolute: true });
  const docsDirPath = {
    en: path.resolve(cwd, 'docs/docs'),
    zh: path.resolve(cwd, 'docs/i18n/zh/docusaurus-plugin-content-docs/current')
  };

  mdxFilePaths.forEach(mdxFilePath => {
    const mdxFileContent = fs.readFileSync(mdxFilePath, 'utf-8');
    const isIndex = /index\.(zh|en)\.mdx$/.test(mdxFilePath);
    const isZh = mdxFilePath.endsWith('.zh.mdx');
    const isEn = mdxFilePath.endsWith('.en.mdx');

    if (!isZh && !isEn) {
      throw new Error(`Invalid mdx file path: ${mdxFilePath}`);
    }

    const localeDirPath = isZh ? docsDirPath.zh : docsDirPath.en;

    if (isIndex) {
      // path.relative(cwd, mdxFilePath) =  src/union/base/has/index.mdx
      // parentDirName = has
      const parentDirName = path.basename(path.dirname(mdxFilePath));
      // relativeDirPath = union/base
      const relativeDirPath = path.relative(
        path.resolve(cwd, 'src'),
        path.dirname(path.dirname(mdxFilePath))
      );

      const targetDocsDirPath = path.resolve(localeDirPath, relativeDirPath);
      const targetDocFilePath = path.resolve(targetDocsDirPath, `${parentDirName}.mdx`);

      fs.ensureDirSync(targetDocsDirPath);
      fs.writeFileSync(targetDocFilePath, mdxFileContent);
    } else {
      // path.relative(cwd, mdxFilePath) =  src/union/base/has.mdx
      // relativeDirPath = union/base
      const relativeDirPath = path.relative(
        path.resolve(cwd, 'src'),
        path.dirname(mdxFilePath)
      );
      const filePrefixName = path.basename(mdxFilePath.replace(/\.(zh|en)\.mdx$/, ''));
      const targetDocsDirPath = path.resolve(localeDirPath, relativeDirPath);

      fs.ensureDirSync(targetDocsDirPath);

      fs.writeFileSync(
        path.resolve(targetDocsDirPath, `${filePrefixName}.mdx`),
        mdxFileContent
      );
    }
  });
}

main();
