export default {
  outputFilePath: 'array/chunk.mdx',
  setting: {
    slug: 'array/chunk',
    title: 'Chunk'
  },
  description: {
    en: 'Split an array into multiple arrays of specified size',
    zh: '将一个数组拆分为指定大小的多个数组'
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.A.Chunk<[], 1> // []
//    ^?
type T1 = tt.A.Chunk<[1, 2, 3, 4], 1> // [[1], [2], [3], [4]]
//    ^?
type T2 = tt.A.Chunk<[1, 2, 3, 4], 2> // [[1, 2], [3, 4]]
//    ^?
type T3 = tt.A.Chunk<[1, 2, 3, 4], 3> // [[1, 2, 3], [4]]
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to split',
        zh: '要拆分的数组'
      }
    },
    {
      name: 'Size',
      type: 'number',
      description: {
        en: 'The size of each chunk',
        zh: '每个数组块的大小'
      }
    }
  ],
  return: {
    type: 'Array<Array<any>>',
    description: {
      en: 'Returns the new array of chunks',
      zh: '返回拆分后的新数组'
    }
  },
  sourceFilePath: 'array/chunk/index.tzen',
  testFilePath: 'array/chunk/index.test.ts'
} as DocumentConfig;
