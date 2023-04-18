export default {
  outputFilePath: 'string/pascal-case.mdx',
  setting: {
    slug: 'string/pascal-case',
    title: 'PascalCase'
  },
  description: {
    en: 'Converts string to [pascal case](https://en.wikipedia.org/wiki/PascalCase)',
    zh: '将字符串转换为[帕斯卡命名法](https://en.wikipedia.org/wiki/PascalCase)'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.PascalCase<'hello, world123'> // 'HelloWorld123'
//    ^?
type T1 = tt.String.PascalCase<'Foo Bar'> // 'FooBar'
//    ^?
type T3 = tt.String.PascalCase<'--foo-bar--'> // 'FooBar'
//    ^?
type T4 = tt.String.PascalCase<'__FOO_BAR__'> // 'FooBar'
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
      en: 'The pascal cased string',
      zh: '帕斯卡命名法字符串'
    }
  },
  sourceFilePath: 'string/pascal-case/index.tzen',
  testFilePath: 'string/pascal-case/index.test.ts'
} satisfies DocumentConfig;
