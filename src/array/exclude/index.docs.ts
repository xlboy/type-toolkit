export default {
  outputFilePath: 'array/exclude.mdx',
  setting: {
    slug: 'array/exclude',
    title: 'Exclude'
  },
  description: {
    en: 'Exclude certain elements from an array',
    zh: '从数组中排除某些元素'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Array.Exclude<['a', 'b', 'c'], 'a' | 'c'> // ['b']
//    ^?
type T1 = tt.Array.Exclude<[{ a: 1 }, 'b', 'a' | null, 'c'?], { a: 1 } | null | undefined> // ['b', 'a', 'c']
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to exclude elements from',
        zh: '需要排除元素的数组'
      }
    },
    {
      name: 'Element',
      description: {
        en: 'The elements to exclude',
        zh: '需要排除的元素'
      }
    }
  ],
  return: {
    type: 'Array<any>',
    description: {
      en: 'The array without the excluded elements',
      zh: '排除指定元素后的新数组'
    }
  },
  sourceFilePath: 'array/exclude/index.tzen',
  testFilePath: 'array/exclude/index.test.ts'
} satisfies DocumentConfig;
