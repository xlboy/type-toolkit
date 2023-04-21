export default {
  outputFilePath: 'guard/if-never.mdx',
  setting: {
    slug: 'guard/if-never',
    title: 'IfNever'
  },
  description: {
    en: 'If the type is `never`, returns the first type, otherwise returns the second type',
    zh: '如果类型为 `never`，返回第一个类型，否则返回第二个类型'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Guard.IfNever<never, 'yes', 'no'> // 'yes'
//    ^?
type T1 = tt.Guard.IfNever<never, '__'> // '__'
//    ^?
type T2 = tt.Guard.IfNever<undefined, 'yes'> // false
//    ^?
type T3 = tt.Guard.IfNever<null, 'yes', 'no..'> // 'no..'
//    ^?
`,
  params: [
    {
      name: 'Target',
      description: {
        en: 'The type to check',
        zh: '要检查的类型'
      }
    },
    {
      name: 'TrueType',
      default: 'true',
      description: {
        en: 'The type to return if the type is `never`',
        zh: '如果类型为 `never`，返回的类型'
      }
    },
    {
      name: 'FalseType',
      default: 'false',
      description: {
        en: 'The type to return if the type is not `never`',
        zh: '如果类型不为 `never`，返回的类型'
      },
    }
  ],
  return: {
    type: 'TrueType | FalseType',
    description: {
      en: 'If the type is `never`, returns `TrueType`, otherwise returns `FalseType`',
      zh: '如果类型为 `never`，返回 `TrueType`，否则返回 `FalseType`'
    }
  },
  sourceFilePath: 'guard/if-never/index.tzen',
  testFilePath: 'guard/if-never/index.test.ts'
} satisfies DocumentConfig;
