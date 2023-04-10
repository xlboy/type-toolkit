export default {
  outputFilePath: 'string/Replace.mdx',
  description: {
    en: 'Replace occurrence of a substring in a string',
    zh: '替换字符串中出现的子字符串'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.Replace<'hello world', 'l', 'L'> // 'heLlo world'
type T1 = tt.S.Replace<'hello world', 'l', 'L', { all: true }> // 'heLLo worLd'
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to replace the substring in',
        zh: '要替换子字符串的字符串源'
      }
    },
    {
      name: 'SearchValue',
      type: 'string',
      description: {
        en: 'The substring to replace',
        zh: '要替换的子字符串'
      }
    },
    {
      name: 'ReplaceValue',
      type: 'string',
      description: {
        en: 'The string to replace the substring with',
        zh: '用于替换子字符串的字符串'
      }
    },
    {
      name: 'Options',
      type: {
        code: {
          filePath: 'string/replace/index.tzen',
          line: [1, 3]
        },
        name: 'ReplaceOptions'
      },
      default: "{}",
      description: {
        en: 'Options',
        zh: '选项'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The replaced string',
      zh: '替换后的字符串'
    }
  },
  sourceFilePath: 'string/replace/index.tzen',
  testFilePath: 'string/replace/index.test.ts'
} satisfies DocumentConfig;
