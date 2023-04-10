export default {
  outputFilePath: 'string/At.mdx',
  description: {
    en: 'Get the character at the specified position',
    zh: '获取指定位置的字符'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.At<'abc', 1> // 'b'
type T1 = tt.S.At<'', 0> // undefined
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to get the character from',
        zh: '要获取字符的字符串源'
      }
    },
    {
      name: 'Index',
      type: 'number',
      description: {
        en: 'The position of the character to get',
        zh: '指定字符的位置'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The character at the specified position',
      zh: '指定位置的字符'
    }
  },
  sourceFilePath: 'string/at/index.tzen',
  testFilePath: 'string/at/index.test.ts'
} satisfies DocumentConfig;
