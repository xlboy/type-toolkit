export default {
  outputFilePath: 'array/non-nullable.mdx',
  setting: {
    slug: 'array/non-nullable',
    title: 'NonNullable'
  },
  description: {
    en: 'Removes `null` and `undefined` or `?` from the array',
    zh: '从数组中移除 `null`、`undefined` 或 `?`'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Array.NonNullable<[1 | null, 2 | undefined, 3]> // [1, 2, 3]
//    ^?
type T1 = tt.Array.NonNullable<[1 | null, 2, 3 | null, 4?]> // [1, 2, 3, 4]
//    ^?
type T2 = tt.Array.NonNullable<[null, 2, undefined, 4?]> // [2, 4]
//    ^?
type T3 = tt.Array.NonNullable<Array<1 | null | undefined | {}>> // Array<1 | {}>
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'The array to remove `null` and `undefined` or `?` from',
        zh: '要从中移除 `null`、`undefined` 或 `?` 的数组'
      }
    }
  ],
  return: {
    type: 'Array<any>',
    description: {
      en: 'The new array',
      zh: '移除后的新数组'
    }
  },
  sourceFilePath: 'array/non-nullable/index.tzen',
  testFilePath: 'array/non-nullable/index.test.ts'
} satisfies DocumentConfig;
