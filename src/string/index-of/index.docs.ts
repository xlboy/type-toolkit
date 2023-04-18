export default {
  outputFilePath: 'string/index-of.mdx',
  setting: {
    slug: 'string/index-of',
    title: 'IndexOf'
  },
  description: {
    en: 'Returns the index within the given string of the first occurrence of the specified value, or -1 if not found',
    zh: '返回指定值在字符串中首次出现的索引，如果未找到则返回 -1'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.IndexOf<'', ''> // 0
//    ^?
type T1 = tt.String.IndexOf<'', 'a'> // -1
//    ^?
type T2 = tt.String.IndexOf<'01234', '2'> // 2
//    ^?
type T3 = tt.String.IndexOf<'01234--01234', '4', 5> // 11
//    ^?
`,
  params: [
    {
      name: 'StrSource',
      type: 'string',
      description: {
        en: 'The string to search in',
        zh: '要在其中搜索的字符串'
      }
    },
    {
      name: 'SearchStr',
      type: 'string',
      description: {
        en: 'The string to search for',
        zh: '要搜索的字符串'
      }
    },
    {
      name: 'Position',
      type: 'number',
      default: '0',
      description: {
        en: 'The index to start the search at. Defaults to 0',
        zh: '搜索的起始索引。默认为 0'
      }
    }
  ],
  return: {
    type: 'number',
    description: {
      en: 'The index of the first occurrence of the specified value, or -1 if not found',
      zh: '指定值在字符串中首次出现的索引，如果未找到则返回 -1'
    }
  },
  sourceFilePath: 'string/index-of/index.tzen',
  testFilePath: 'string/index-of/index.test.ts'
} satisfies DocumentConfig;
