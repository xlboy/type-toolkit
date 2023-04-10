export default {
  outputFilePath: 'string/trim-end.mdx',
  setting: {
    slug: 'string/trim-end',
    title: 'TrimEnd'
  },
  description: {
    en: 'Remove the spaces at the end of the string',
    zh: '移除字符串右侧的空格'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.TrimEnd<'1 1, 3  '> // '1 1, 3'
type T1 = tt.S.TrimEnd<'  1  '> // '  1'
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to be trimmed',
        zh: '要被修剪的字符串'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The trimmed string',
      zh: '修剪后的字符串'
    }
  },
  sourceFilePath: 'string/trim-end/index.tzen',
  testFilePath: 'string/trim-end/index.test.ts'
} as DocumentConfig;
