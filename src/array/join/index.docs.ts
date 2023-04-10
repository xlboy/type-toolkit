export default {
  outputFilePath: 'array/join.mdx',
  setting: {
    slug: 'array/join',
    title: 'Join'
  },
  description: {
    en: 'Use the specified delimiter to join the elements of an array into a string',
    zh: '使用指定的分隔符将数组的元素连接成一个字符串'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.A.Join<['a', 'b', 'c'], '-'> // 'a-b-c' 
type T1 = tt.A.Join<['a', 'b', 'c'], '->'> // 'a->b->c'
type T2 = tt.A.Join<['a', 'b', 'c'], ' or '> // 'a or b or c'
`,
  params: [
    {
      name: 'Strings',
      type: 'ReadonlyArray<string | number>',
      description: {
        en: 'The string array to join',
        zh: '要连接的字符串数组'
      }
    },
    {
      name: 'Delimiter',
      type: 'string',
      description: {
        en: 'The delimiter used to join the strings',
        zh: '用于连接字符串的分隔符'
      },
      default: '""'
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The joined string',
      zh: '连接好的字符串'
    }
  },
  sourceFilePath: 'array/join/index.tzen',
  testFilePath: 'array/join/index.test.ts'
} satisfies DocumentConfig;
