export default {
  outputFilePath: 'guard/is-any.mdx',
  setting: {
    slug: 'guard/is-any',
    title: 'IsAny'
  },
  description: {
    en: 'Checks if the type is `any`',
    zh: '检查类型是否为 `any`'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Guard.IsAny<any> // true
//    ^?
type T1 = tt.Guard.IsAny<never> // false
//    ^?
type T2 = tt.Guard.IsAny<unknown> // false
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
      en: '`true` if the type is `any`, otherwise `false`',
      zh: '如果类型为 `any` 则为 `true`，否则为 `false`'
    }
  },
  sourceFilePath: 'guard/is-any/index.tzen',
  testFilePath: 'guard/is-any/index.test.ts'
} satisfies DocumentConfig;
