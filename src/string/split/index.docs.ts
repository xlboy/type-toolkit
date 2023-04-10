export default {
  outputFilePath: 'string/split.mdx',
  setting: {
    slug: 'string/split',
    title: 'Split'
  },
  description: {
    en: 'Split a string into an array by a specified delimiter',
    zh: '将字符串按指定的分隔符拆分为数组'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.Split<'a-b-c', '-'> // ['a', 'b', 'c']
type T1 = tt.S.Split<'a->b->c', '->'> // ['a', 'b', 'c']
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to split',
        zh: '要拆分的字符串'
      }
    },
    {
      name: 'Delimiter',
      type: 'string',
      description: {
        en: 'The delimiter used to split the string',
        zh: '用于拆分字符串的分隔符'
      }
    }
  ],
  return: {
    type: 'string[]',
    description: {
      en: 'The array of the split string',
      zh: '拆分后的数组'
    }
  },
  sourceFilePath: 'string/Split/index.tzen',
  testFilePath: 'string/Split/index.test.ts'
} as DocumentConfig;
