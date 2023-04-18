export default {
  outputFilePath: 'string/trim.mdx',
  setting: {
    slug: 'string/trim',
    title: 'Trim'
  },
  description: {
    en: 'Remove the spaces at the beginning and end of the string',
    zh: '移除字符串首尾的空格'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.Trim<'  1  '> // '1'
//    ^?
type T1 = tt.String.Trim<'  1 2  '> // '1 2'
//    ^?
type T2 = tt.String.Trim<'  1 2 3  '> // '1 2 3'
//    ^?
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
  sourceFilePath: 'string/trim/index.tzen',
  testFilePath: 'string/trim/index.test.ts'
} satisfies DocumentConfig;
