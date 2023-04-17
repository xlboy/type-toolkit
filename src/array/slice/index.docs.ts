export default {
  outputFilePath: 'array/slice.mdx',
  setting: {
    slug: 'array/slice',
    title: 'Slice'
  },
  description: {
    en: 'Extracts a section of an array',
    zh: '提取数组的一部分'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.A.Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
//    ^?
type T1 = tt.A.Slice<[1, 2, 3, 4, 5], 1, 10> // [2, 3, 4, 5]
//    ^?
type T2 = tt.A.Slice<[1, 2, 3, 4, 5], 10, 10> // []
//    ^?
  `,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to extract from',
        zh: '要提取的数组'
      }
    },
    {
      name: 'Start',
      type: 'number',
      description: {
        en: 'The beginning index of the specified portion of the array',
        zh: '要提取的数组部分的开始位置'
      }
    },
    {
      name: 'End',
      type: 'number',
      description: {
        en: 'The end index of the specified portion of the array',
        zh: '要提取的数组部分的结束位置'
      }
    }
  ],
  return: {
    type: 'Array<any>',
    description: {
      en: 'The extracted array',
      zh: '提取出的数组'
    }
  },
  sourceFilePath: 'array/slice/index.tzen',
  testFilePath: 'array/slice/index.test.ts'
} as DocumentConfig;
