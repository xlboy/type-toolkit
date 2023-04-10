import fs from 'fs-extra';
import path from 'node:path';

export function createDocMdx(locale: Locale, docsConfig: DocumentConfig) {
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

  return `
import ParamTable from '@site/src/components/ParamTable';
import ReturnValue from '@site/src/components/ReturnValue';

${docsConfig.description.zh}

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
      'https://github.com/xlboy/type-zen/blob/master/src/' +
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
