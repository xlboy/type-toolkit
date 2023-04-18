export default {
  outputFilePath: 'array/length.mdx',
  setting: {
    slug: 'array/length',
    title: 'Length'
  },
  description: {
    en: 'Get the length of an array',
    zh: '获取数组的长度'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Array.Length<[]> // 0
//    ^?
type T1 = tt.Array.Length<[1]> // 1
//    ^?
type T2 = tt.Array.Length<[1, 2, 3]> // 3
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'ReadonlyArray<any>',
      description: {
        en: 'The array to get the length from',
        zh: '要获取长度的数组'
      }
    }
  ],
  return: {
    type: 'number',
    description: {
      en: 'The length of the array',
      zh: '数组的长度'
    }
  },
  sourceFilePath: 'array/length/index.tzen',
  testFilePath: 'array/length/index.test.ts'
} satisfies DocumentConfig;
