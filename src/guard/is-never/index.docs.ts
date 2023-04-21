export default {
  outputFilePath: 'guard/is-never.mdx',
  setting: {
    slug: 'guard/is-never',
    title: 'IsNever'
  },
  description: {
    en: 'Checks if the type is `never`',
    zh: '检查类型是否为 `never`'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Guard.IsNever<never> // true
//    ^?
type T1 = tt.Guard.IsNever<undefined> // false
//    ^?
type T2 = tt.Guard.IsNever<null> // false
//    ^?
`,
  params: [
    {
      name: 'Target',
      description: {
        en: 'The type to check',
        zh: '要检查的类型'
      }
    }
  ],
  return: {
    type: 'boolean',
    description: {
      en: '`true` if the type is `never`, otherwise `false`',
      zh: '如果类型为 `never` 则为 `true`，否则为 `false`'
    }
  },
  sourceFilePath: 'guard/is-never/index.tzen',
  testFilePath: 'guard/is-never/index.test.ts'
} satisfies DocumentConfig;
