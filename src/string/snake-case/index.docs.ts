export default {
  outputFilePath: 'string/snake-case.mdx',
  setting: {
    slug: 'string/snake-case',
    title: 'SnakeCase'
  },
  description: {
    en: 'Converts string to [snake case](https://en.wikipedia.org/wiki/Letter_case#Snake_case)',
    zh: '将字符串转换为[蛇形命名法](https://en.wikipedia.org/wiki/Letter_case#Snake_case)'
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.S.SnakeCase<'hello, world'> // 'hello_world'
//    ^?
type T1 = tt.S.SnakeCase<'foo bar'> // 'foo_bar'
//    ^?
type T2 = tt.S.SnakeCase<'fooBar'> // 'foo_bar'
//    ^?
type T3 = tt.S.SnakeCase<'__FOO_BAR__'> // 'foo_bar'
//    ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'String to convert',
        zh: '要转换的字符串'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The snake cased string',
      zh: '转换后的蛇形命名字符串'
    }
  },
  sourceFilePath: 'string/snake-case/index.tzen',
  testFilePath: 'string/snake-case/index.test.ts'
} as DocumentConfig;
