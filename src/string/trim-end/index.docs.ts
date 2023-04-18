export default {
  outputFilePath: 'string/trim-end.mdx',
  setting: {
    slug: 'string/trim-end',
    title: 'TrimEnd'
  },
  description: {
    en: 'Remove the spaces at the end of the string',
    zh: '移除字符串末尾的空格'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.TrimEnd<'1 1, 3  '> // '1 1, 3'
//    ^?
type T1 = tt.String.TrimEnd<'  1  '> // '  1'
//    ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to be trimmed',
        zh: '要被移除末尾空格的字符串'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The string without the spaces at the end',
      zh: '没有末尾空格的字符串'
    }
  },
  sourceFilePath: 'string/trim-end/index.tzen',
  testFilePath: 'string/trim-end/index.test.ts'
} satisfies DocumentConfig;
