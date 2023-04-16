export default {
  outputFilePath: 'string/split-words.mdx',
  setting: {
    slug: 'string/split-words',
    title: 'SplitWords'
  },
  description: {
    en: 'Splits string into an array of its words',
    zh: '将字符串分割为单词数组'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.SplitWords<'fred, barney, & pebbles'> // ['fred', 'barney', 'pebbles']
//    ^?
type T1 = tt.S.SplitWords<'helloWORLD, hi, 111'>  // ['hello', 'WORLD', 'hi', '111']
//    ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to inspect',
        zh: '要分割的字符串'
      }
    }
  ],
  return: {
    type: 'string[]',
    description: {
      en: 'Returns the words of `Str`',
      zh: '返回字符串`Str`的单词数组'
    }
  },
  sourceFilePath: 'string/split-words/index.tzen',
  testFilePath: 'string/split-words/index.test.ts'
} as DocumentConfig;
