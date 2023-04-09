import fg from 'fast-glob';
import fs from 'fs-extra';
import path from 'node:path';

// 1. 将 src 中的 {en, zh}*.mdx 文件移动到 docs 中（en, zh 对应着不同的目录）
// 2. 在移动的过程中，会根据 *.{en, zh}.mdx 的文件名进行适当的过滤处理
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
