export default {
  outputFilePath: 'array/head.mdx',
  setting: {
    slug: 'array/head',
    title: 'Head'
  },
  description: {
    en: 'Gets the first element of an array',
    zh: '获取数组的第一个元素'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.A.Head<[1, 2, 3]> // 1
//    ^?
type T1 = tt.A.Head<['1', 2]> // '1'
//    ^?
type T2 = tt.A.Head<number[]> // number
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to get the first element from',
        zh: '要获取第一个元素的数组'
      }
    }
  ],
  return: {
    type: 'any',
    description: {
      en: 'The first element of the array',
      zh: '数组的第一个元素'
    }
  },
  sourceFilePath: 'array/head/index.tzen',
  testFilePath: 'array/head/index.test.ts'
} satisfies DocumentConfig;
