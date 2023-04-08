import fg from 'fast-glob';
import fs from 'fs-extra';
import path from 'node:path';
import * as colorette from 'colorette';
import * as tz from '@type-zen/core';
import consola from 'consola';
import _ from 'lodash-es';

function main() {
  const cwd = process.cwd();
  const filePaths = fg.sync(['src/**/*.tzen', 'src/**/*.ts'], { cwd, absolute: true });

  fs.removeSync(path.resolve(cwd, 'dist'));

  filePaths.forEach(filePath => {
    if (filePath.endsWith('.jsdoc.ts')) return;

    const relativeDirPathInSrc = path.relative(
      path.resolve(cwd, 'src'),
      path.dirname(filePath)
    );
    const outputDirPath = path.resolve(cwd, 'dist', relativeDirPathInSrc);
    fs.ensureDirSync(outputDirPath);

    if (filePath.endsWith('.ts')) {
      fs.copySync(filePath, path.resolve(outputDirPath, path.basename(filePath)));
      return;
    }

    const tzenFilePath = filePath;
    const tzenFileContent = fs.readFileSync(tzenFilePath, 'utf-8');

    type TzenJSDocInfos = Record</* target-slot */ string, /* js-doc */ string>;
    const tzenJSDocInfos: TzenJSDocInfos | null = (() => {
      const filePath = getRelativeSuffixFilePath(tzenFilePath, '.jsdoc.ts');

      if (!fs.existsSync(filePath)) return null;

      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const comments = fileContent.match(/\/\*\*[\s\S]*?\*\//g);

      if (!comments || comments.length === 0) return null;

      const result: TzenJSDocInfos = {};

      comments.forEach(comment => {
        const targetSlot = comment.match(/\$\$target-slot\s*:\s*(\S+)/)?.[1];
        if (targetSlot) {
          result[targetSlot] = comment.replace(/\n[^\$]+\$\$target-slot\s*:\s*(\S+)/, '');
        }
      });

      return result;
    })();

    let outputTzenContent = '';

    try {
      const ast = new tz.Parser().parse(tzenFileContent);

      if (ast && ast.length) {
        const compiled = new tz.Compiler().compile(ast);
        const compiledNodes = compiled.toNodes();
        let compiledText = compiled.toText();
        const toInsertJSDocPos: Array<{ pos: tz.ASTNodePosition; jsDoc: string }> = [];

        if (tzenJSDocInfos) {
          Object.entries(tzenJSDocInfos).forEach(([targetSlot, jsDocText]) => {
            const targetStatement = ast.find(node => isTargetStatement(targetSlot, node));

            if (targetStatement) {
              toInsertJSDocPos.push({ pos: targetStatement.pos, jsDoc: jsDocText });
            }
          });
        }

        toInsertJSDocPos.forEach(({ pos, jsDoc }) => {
          const nodeOfToInsert = compiledNodes.find(node => {
            if (!node.pos.source) return false;

            if (node.pos.source.start.line === pos.start.line) {
              return true;
            }
          });

          if (nodeOfToInsert) {
            const {
              start: { line: startLine }
            } = nodeOfToInsert.pos.result!;

            const lines = compiledText.split('\n');
            lines.splice(startLine - 1, 0, jsDoc);
            compiledText = lines.join('\n');
          }
        });
        outputTzenContent = '// @ts-nocheck\n\n' + compiledText;
      }
    } catch (error) {
      consola.error('Error while parsing file: ' + tzenFilePath);
      throw error;
    }

    const outputCompiledTzenFilePath = path.resolve(
      outputDirPath,
      path.basename(tzenFilePath) + '.d.ts'
    );
    fs.writeFileSync(outputCompiledTzenFilePath, outputTzenContent);

    const outputTzenFilePath = path.resolve(outputDirPath, path.basename(tzenFilePath));
    fs.copySync(tzenFilePath, outputTzenFilePath);

    consola.success(
      'Compiled: ' + colorette.blue(path.relative(cwd, outputCompiledTzenFilePath))
    );
  });

  return;

  function isTargetStatement(id: string, statement: tz.stmtNode.StatementBase) {
    if (tz.nodeGuard.statement.isInterface(statement)) {
      return statement.name.value === id;
    }

    if (tz.nodeGuard.statement.isTypeAlias(statement)) {
      return statement.name.value === id;
    }

    if (tz.nodeGuard.statement.isDeclareFunction(statement)) {
      return statement.name.value === id;
    }

    if (tz.nodeGuard.statement.isDeclareVariable(statement)) {
      return statement.name.value === id;
    }

    if (tz.nodeGuard.statement.isEnum(statement)) {
      return statement.name.value === id;
    }

    if (tz.nodeGuard.statement.isExportNamed(statement)) {
      return isTargetStatement(id, statement.body);
    }
  }

  function getRelativeSuffixFilePath(tzenFilePath: string, suffix: string) {
    return path.resolve(
      path.dirname(tzenFilePath),
      path.basename(tzenFilePath, '.tzen') + suffix
    );
  }
}

main();
