export default {
  outputFilePath: 'string/ends-with.mdx',
  setting: {
    slug: 'string/ends-with',
    title: 'EndWith'
  },
  description: {
    en: 'Checks if string ends with the given target string.',
    zh: '检查字符串是否以指定的目标字符串结尾。'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.EndsWith<'123-', '3-'> // true
//   ^?
type T1 = tt.S.EndsWith<'123-', '-'> // true
//   ^?
type T2 = tt.S.EndsWith<'123-', '3'> // false
//   ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to inspect.',
        zh: '要检查的字符串。'
      }
    },
    {
      name: 'Target',
      type: 'string',
      description: {
        en: 'The string to search for.',
        zh: '要搜索的字符串。'
      }
    }
  ],
  return: {
    type: 'boolean',
    description: {
      en: 'Returns `true` if string ends with `target`, else `false`.',
      zh: '如果字符串以`target`结尾，则返回`true`，否则返回`false`。'
    }
  },
  sourceFilePath: 'string/ends-with/index.tzen',
  testFilePath: 'string/ends-with/index.test.ts'
} as DocumentConfig;
