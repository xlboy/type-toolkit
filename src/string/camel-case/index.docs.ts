export default {
  outputFilePath: 'string/camel-case.mdx',
  setting: {
    slug: 'string/camel-case',
    title: 'CamelCase'
  },
  description: {
    en: 'Converts string to [camel case](https://en.wikipedia.org/wiki/CamelCase)',
    zh: '将字符串转换为[驼峰命名法](https://en.wikipedia.org/wiki/CamelCase)'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.String.CamelCase<'hello, world123'> // 'helloWorld123'
//    ^?
type T1 = tt.String.CamelCase<'Foo Bar'> // 'fooBar'
//    ^?
type T3 = tt.String.CamelCase<'--foo-bar--'> // 'fooBar'
//    ^?
type T4 = tt.String.CamelCase<'__FOO_BAR__'> // 'fooBar'
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
      en: 'The camel cased string.',
      zh: '驼峰命名的字符串'
    }
  },
  sourceFilePath: 'string/camel-case/index.tzen',
  testFilePath: 'string/camel-case/index.test.ts'
} satisfies DocumentConfig;
