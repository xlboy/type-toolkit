export default {
  outputFilePath: 'string/length.mdx',
  setting: {
    slug: 'string/length',
    title: 'Length'
  },
  description: {
    en: 'Get the length of a string',
    zh: '获取字符串的长度'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.Length<'abc'> // 3
//    ^?
type T1 = tt.String.Length<''> // 0
//    ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to get the length of',
        zh: '要获取长度的字符串源'
      }
    }
  ],
  return: {
    type: 'number',
    description: {
      en: 'The length of the string',
      zh: '字符串的长度'
    }
  },
  sourceFilePath: 'string/length/index.tzen',
  testFilePath: 'string/length/index.test.ts'
} satisfies DocumentConfig;
