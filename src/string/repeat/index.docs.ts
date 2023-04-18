export default {
  outputFilePath: 'string/repeat.mdx',
  setting: {
    slug: 'string/repeat',
    title: 'Repeat'
  },
  description: {
    en: 'Repeat a string a specified number of times',
    zh: '对字符串进行指定次数的重复连接'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.Repeat<'-', 3> // '---'
//    ^?
type T1 = tt.String.Repeat<'-_-', 3> // '-_--_--_-'
//    ^?
type T2 = tt.String.Repeat<'-_-', 0> // '-_-'
//    ^?
`,
  params: [
    {
      name: 'StrSource',
      type: 'string',
      description: {
        en: 'The string to repeat',
        zh: '要重复的字符串'
      }
    },
    {
      name: 'Count',
      type: 'number',
      description: {
        en: 'The number of times to repeat the string',
        zh: '要重复的次数'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The repeated string',
      zh: '重复连接后的字符串'
    }
  },
  sourceFilePath: 'string/repeat/index.tzen',
  testFilePath: 'string/repeat/index.test.ts'
} satisfies DocumentConfig;
