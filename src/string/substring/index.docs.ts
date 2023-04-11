export default {
  outputFilePath: 'string/substring.mdx',
  setting: {
    slug: 'string/substring',
    title: 'Substring'
  },
  description: {
    en: 'Extracts a substring from a string at a specified location',
    zh: '从字符串的指定位置提取子字符串'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.Substring<'12345', 1, 3> // '23'
type T1 = tt.S.Substring<'12345', 1> // '2345'
type T2 = tt.S.Substring<'12345', 1, 2> // '2'
`,
  params: [
    {
      name: 'StrSource',
      type: 'string',
      description: {
        en: 'The string to extract from',
        zh: '要从中提取的字符串'
      }
    },
    {
      name: 'Start',
      type: 'number',
      description: {
        en: 'The index to start extracting from',
        zh: '开始提取的位置'
      }
    },
    {
      name: 'End',
      type: 'number',
      default: '-1',
      description: {
        en: 'The index to stop extracting at, if `-1` then the end of the string is used',
        zh: '要停止提取的位置，如果为 `-1` 则使用字符串的结尾'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The extracted substring',
      zh: '提取出的子字符串'
    }
  },
  sourceFilePath: 'string/substring/index.tzen',
  testFilePath: 'string/substring/index.test.ts'
} satisfies DocumentConfig;
