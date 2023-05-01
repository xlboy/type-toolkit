export default {
  outputFilePath: 'guard/is-equal.mdx',
  setting: {
    slug: 'guard/is-equal',
    title: 'IsEqual'
  },
  description: {
    en: 'Checks if the two types are equal',
    zh: '检查两个类型是否相等'
  },
  params: [
    {
      name: 'X',
      description: {
        en: 'The first type to check',
        zh: '要检查的第一个类型'
      }
    },
    {
      name: 'Y',
      description: {
        en: 'The second type to check',
        zh: '要检查的第二个类型'
      }
    }
  ],
  return: {
    type: 'boolean',
    description: {
      en: '`true` if the two types are equal, otherwise `false`',
      zh: '如果两个类型相等则为 `true`，否则为 `false`'
    }
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.Guard.IsEqual<1, false> // false
//    ^?
type T1 = tt.Guard.IsEqual<1, 1> // true
//    ^?
type T2 = tt.Guard.IsEqual<'1' | '2', '2'> // false
//    ^?
type T3 = tt.Guard.IsEqual<'1' | '2', '2' | '1'> // true
//    ^?
type T4 = tt.Guard.IsEqual<{ a: 1 }, { a: 1 }> // true
//    ^?
type T5 = tt.Guard.IsEqual<{ a: 1 }, { a?: 1 }> // false
//    ^?
type T6 = tt.Guard.IsEqual<() => boolean, () => void> // false
//    ^?
type T7 = tt.Guard.IsEqual<() => void, (a: number) => void> // false
//    ^?
type T8 = tt.Guard.IsEqual<(a: number) => void, (b: number) => void> // true
//    ^?
`,
  sourceFilePath: 'guard/is-equal/index.tzen',
  testFilePath: 'guard/is-equal/index.test.ts'
} satisfies DocumentConfig;
