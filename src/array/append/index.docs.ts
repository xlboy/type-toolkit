export default {
  outputFilePath: 'array/append.mdx',
  setting: {
    slug: 'array/append',
    title: 'Append'
  },
  description: {
    en: 'Add the specified element to the end of the array',
    zh: '将指定元素添加到数组的末尾'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Array.Append<[], 1> // [1]
//    ^?
type T1 = tt.Array.Append<[1], string> // [1, string]
//    ^?
type T2 = tt.Array.Append<string[], { a: 1 }> // [...string[], { a: 1 }]
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to be added to',
        zh: '要添加到的数组'
      }
    },
    {
      name: 'Element',
      description: {
        en: 'The element to be added',
        zh: '要添加的元素'
      }
    }
  ],
  return: {
    type: 'Array<any>',
    description: {
      en: 'The array after adding the element',
      zh: '添加元素后的数组'
    }
  },
  sourceFilePath: 'array/append/index.tzen',
  testFilePath: 'array/append/index.test.ts'
} satisfies DocumentConfig;
