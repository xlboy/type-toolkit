export default {
  outputFilePath: 'string/extract-content-between-delimiters.mdx',
  setting: {
    slug: 'string/extract-content-between-delimiters',
    title: 'ExtractContentBetweenDelimiters'
  },
  description: {
    en: 'Extract the text content between two delimiters',
    zh: '提取两个分隔符之间的文本内容'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.ExtractContentBetweenDelimiters<'__[123]?.[gg]...', '[', ']'> // ['123', 'gg']
//    ^?
type T1 = tt.String.ExtractContentBetweenDelimiters<'[123][gg]', '[', ']'> // ['123', 'gg']
//    ^?
type T2 = tt.String.ExtractContentBetweenDelimiters<'{123,... }', '{', '}'> // ['123,... ']
//    ^?
type T3 = tt.String.ExtractContentBetweenDelimiters<'/api/getUserInfo?#{id},#{name}', '#{', '}'> // ['id', 'name']
//    ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to extract',
        zh: '要提取的字符串'
      }
    },
    {
      name: 'LeftDelimiter',
      type: 'string',
      description: {
        en: 'The left delimiter',
        zh: '左分隔符'
      }
    },
    {
      name: 'RightDelimiter',
      type: 'string',
      description: {
        en: 'The right delimiter',
        zh: '右分隔符'
      }
    }
  ],
  return: {
    type: 'string[]',
    description: {
      en: 'Returns the text content between two delimiters',
      zh: '返回两个分隔符之间的文本内容'
    }
  },
  sourceFilePath: 'string/extract-content-between-delimiters/index.tzen',
  testFilePath: 'string/extract-content-between-delimiters/index.test.ts'
} satisfies DocumentConfig;
