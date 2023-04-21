export default {
  outputFilePath: 'guard/if-any.mdx',
  setting: {
    slug: 'guard/if-any',
    title: 'IfAny'
  },
  description: {
    en: 'If the type is `any`, returns the first type, otherwise returns the second type',
    zh: '如果类型为 `any`，返回第一个类型，否则返回第二个类型'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Guard.IfAny<any, 'yes', 'no'> // 'yes'
//    ^?
type T1 = tt.Guard.IfAny<any, '__'> // '__'
//    ^?
type T2 = tt.Guard.IfAny<undefined, 'yes'> // false
//    ^?
type T3 = tt.Guard.IfAny<null, 'yes', 'no..'> // 'no..'
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
        en: 'The type to return if the type is `any`',
        zh: '如果类型为 `any`，返回的类型'
      }
    },
    {
      name: 'FalseType',
      default: 'false',
      description: {
        en: 'The type to return if the type is not `any`',
        zh: '如果类型不为 `any`，返回的类型'
      },
    }
  ],
  return: {
    type: 'TrueType | FalseType',
    description: {
      en: 'If the type is `any`, returns `TrueType`, otherwise returns `FalseType`',
      zh: '如果类型为 `any`，返回 `TrueType`，否则返回 `FalseType`'
    }
  },
  sourceFilePath: 'guard/if-any/index.tzen',
  testFilePath: 'guard/if-any/index.test.ts'
} satisfies DocumentConfig;
