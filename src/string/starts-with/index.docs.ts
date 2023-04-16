export default {
  outputFilePath: 'string/starts-with.mdx',
  setting: {
    slug: 'string/starts-with',
    title: 'StartsWith'
  },
  description: {
    en: 'Checks if string starts with the given target string',
    zh: '检查字符串是否以指定字符串开头'
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.S.StartsWith<'123-', '1'> // true
//    ^?
type T1 = tt.S.StartsWith<'123-', '12'> // true
//    ^?
type T2 = tt.S.StartsWith<'123-', '1-'> // false
//    ^?
type T3 = tt.S.StartsWith<'123-', '2'> // false
//    ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to inspect.',
        zh: '待检查的字符串'
      }
    },
    {
      name: 'Target',
      type: 'string',
      description: {
        en: 'The string to search for',
        zh: '待查找的目标字符串'
      }
    }
  ],
  return: {
    type: 'boolean',
    description: {
      en: 'Returns `true` if string starts with `target`, else `false`',
      zh: '如果字符串以 `target` 开头，则返回 `true`，否则返回 `false`'
    }
  },
  sourceFilePath: 'string/starts-with/index.tzen',
  testFilePath: 'string/starts-with/index.test.ts'
} as DocumentConfig;
