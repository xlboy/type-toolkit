export default {
  outputFilePath: 'string/trim-start.mdx',
  setting: {
    slug: 'string/trim-start',
    title: 'TrimStart'
  },
  description: {
    en: 'Remove the spaces at the beginning of the string',
    zh: '移除字符串开始处的空格'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.TrimStart<'  11, 3'> // '11, 3'
type T1 = tt.S.TrimStart<'     1'> // '1'
type T2 = tt.S.TrimStart<'  1  '> // '1  '
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to be trimmed',
        zh: '要被修剪的字符串'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The trimmed string',
      zh: '修剪后的字符串'
    }
  },
  sourceFilePath: 'string/trim-start/index.tzen',
  testFilePath: 'string/trim-start/index.test.ts'
} satisfies DocumentConfig;
