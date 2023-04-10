export default {
  outputFilePath: 'array/pop.mdx',
  setting: {
    slug: 'array/pop',
    title: 'Pop'
  },
  description: {
    en: 'Delete the last element in the array',
    zh: '删除数组中的最后一个元素'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.A.Pop<[1, 2, 3]> //  [1, 2]
type T1 = tt.A.Pop<[1, 2, 3, 4]> // [1, 2, 3]
`,
  params: [
    {
      name: 'Arr',
      type: 'ReadonlyArray<any>',
      description: {
        en: 'The source of the array to delete the last element from',
        zh: '数组源'
      }
    }
  ],
  return: {
    type: 'any[]',
    description: {
      en: 'The array without the last element',
      zh: '没有最后一个元素的数组'
    }
  },
  sourceFilePath: 'array/pop/index.tzen',
  testFilePath: 'array/pop/index.test.ts'
} satisfies DocumentConfig;
