export default {
  outputFilePath: 'array/last.mdx',
  setting: {
    slug: 'array/last',
    title: 'Last'
  },
  description: {
    en: 'Returns the last element of an array',
    zh: '返回数组的最后一个元素'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.A.Last<[1, 2, 3]> // 3
//    ^?
type T1 = tt.A.Last<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]> // 10
//    ^?
type T2 = tt.A.Last<[1, 2, 'g', 'h', 'i', 'x', 'y', 'z']> // 'z'
//    ^?
type T3 = tt.A.Last<[true, false, true, false, true, false]> // false
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to query',
        zh: '要查询的数组'
      }
    }
  ],
  return: {
    type: 'any',
    description: {
      en: 'Returns the last element of `Arr`',
      zh: '返回 `Arr` 的最后一个元素'
    }
  },
  sourceFilePath: 'array/last/index.tzen',
  testFilePath: 'array/last/index.test.ts'
} satisfies DocumentConfig;
