export default {
  outputFilePath: 'array/last.mdx',
  setting: {
    slug: 'array/last',
    title: 'Last'
  },
  description: {
    en: 'Gets the last element of an array',
    zh: '获取数组的最后一个元素'
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.Array.Last<[1, 2, 3]> // 3
//    ^?
type T1 = tt.Array.Last<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]> // 10
//    ^?
type T2 = tt.Array.Last<[1, 2, 'g', 'h', 'i', 'x', 'y', 'z']> // 'z'
//    ^?
type T3 = tt.Array.Last<[true, false, true, false, true, false]> // false
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to get the last element from',
        zh: '从中获取最后一个元素的数组'
      }
    }
  ],
  return: {
    type: 'any',
    description: {
      en: 'The last element of the array',
      zh: '数组的最后一个元素'
    }
  },
  sourceFilePath: 'array/last/index.tzen',
  testFilePath: 'array/last/index.test.ts'
} satisfies DocumentConfig;
