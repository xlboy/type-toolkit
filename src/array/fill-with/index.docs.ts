export default {
  outputFilePath: 'array/fill-with.mdx',
  setting: {
    slug: 'array/fill-with',
    title: 'FillWith'
  },
  description: {
    en: 'Fill an array with a specific value',
    zh: '使用指定值填充数组'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Array.FillWith<'a', 3>; // ['a', 'a', 'a']
//    ^?
type T1 = tt.Array.FillWith<1, 3>; // [1, 1, 1]
//    ^?
type T2 = tt.Array.FillWith<true, 3>; // [true, true, true]
//    ^?
`,
  params: [
    {
      name: 'Element',
      description: {
        en: 'The value to fill',
        zh: '要填充的值'
      }
    },
    {
      name: 'Length',
      description: {
        en: 'The length to fill',
        zh: '要填充的长度'
      }
    }
  ],
  return: {
    type: 'Array<any>',
    description: {
      en: 'The filled array',
      zh: '填充后的数组'
    }
  },
  sourceFilePath: 'array/fill-with/index.tzen',
  testFilePath: 'array/fill-with/index.test.ts'
} satisfies DocumentConfig;
