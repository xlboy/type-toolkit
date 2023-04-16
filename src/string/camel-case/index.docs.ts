export default {
  outputFilePath: 'string/camel-case.mdx',
  setting: {
    slug: 'string/camel-case',
    title: 'CamelCase'
  },
  description: {
    en: 'Converts string to camel case',
    zh: '将字符串转换为驼峰命名法'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.S.CamelCase<'hello, world123'> // 'helloWorld123'
//    ^?
type T1 = tt.S.CamelCase<'Foo Bar'> // 'fooBar'
//    ^?
type T3 = tt.S.CamelCase<'--foo-bar--'> // 'fooBar'
//    ^?
type T4 = tt.S.CamelCase<'__FOO_BAR__'> // 'fooBar'
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
} as DocumentConfig;
