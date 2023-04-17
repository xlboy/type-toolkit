export default {
  outputFilePath: 'array/concat.mdx',
  setting: {
    slug: 'array/concat',
    title: 'Concat'
  },
  description: {
    en: 'Connect two arrays together, return a new array',
    zh: '连接两个数组并返回一个新数组'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.A.Concat<[1], [2, 3, 4, ['..'?]]> // [1, 2, 3, 4, ['..'?]]
//    ^?
type T1 = tt.A.Concat<[number, string], [boolean, 1]> // [number, string, boolean, 1]
//    ^?
`,
  params: [
    {
      name: 'Arr1',
      type: 'Array<any>',
      description: {
        en: 'The first array',
        zh: '第一个数组'
      }
    },
    {
      name: 'Arr2',
      type: 'Array<any>',
      description: {
        en: 'The second array',
        zh: '第二个数组'
      }
    }
  ],
  return: {
    type: 'Array<any>',
    description: {
      en: 'The new array after connection',
      zh: '连接后的新数组'
    }
  },
  sourceFilePath: 'array/concat/index.tzen',
  testFilePath: 'array/concat/index.test.ts'
} as DocumentConfig;
