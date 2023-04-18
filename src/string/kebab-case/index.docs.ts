export default {
  outputFilePath: 'string/kebab-case.mdx',
  setting: {
    slug: 'string/kebab-case',
    title: 'KebabCase'
  },
  description: {
    en: 'Converts string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)',
    zh: '将字符串转换为[短横线命名法](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.KebabCase<'hello, world'> // 'hello-world'
//    ^?
type T1 = tt.String.KebabCase<'foo bar'> // 'foo-bar'
//    ^?
type T2 = tt.String.KebabCase<'fooBar'> // 'foo-bar'
//    ^?
type T3 = tt.String.KebabCase<'__FOO_BAR__'> // 'foo-bar'
//    ^?
`,
  params: [
    {
      name: 'Str',
      type: 'string',
      description: {
        en: 'The string to convert',
        zh: '要转换的字符串'
      }
    }
  ],
  return: {
    type: 'string',
    description: {
      en: 'The kebab cased string',
      zh: '短横线命名法的字符串'
    }
  },
  sourceFilePath: 'string/kebab-case/index.tzen',
  testFilePath: 'string/kebab-case/index.test.ts'
} satisfies DocumentConfig;
