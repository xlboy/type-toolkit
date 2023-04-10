export default {
  outputFilePath: 'object/set-writable.mdx',
  setting: {
    slug: 'object/set-writable',
    title: 'SetWritable'
  },
  description: {
    en: 'Set the writable property of the object',
    zh: '设置对象的可写属性'
  },
  example: `
import type tt from 'type-toolkit';

type T1 = tt.O.SetWritable<{ a: 1, b: 2, readonly c: 3 }, 'c'> // { a: 1, b: 2, c: 3 }
`,
  params: [
    {
      name: 'O',
      type: 'object',
      description: {
        en: 'The object to set the writable property',
        zh: '要设置可写属性的对象源'
      }
    },
    {
      name: 'Keys',
      type: 'keyof O',
      default: 'keyof O',
      description: {
        en: 'The keys to set the writable property',
        zh: '要设置可写属性的键'
      }
    }
  ],
  return: {
    type: 'object',
    description: {
      en: 'The object with the writable property set',
      zh: '设置了可写属性的对象'
    }
  },
  sourceFilePath: 'object/set-writable/index.tzen',
  testFilePath: 'object/set-writable/index.test.ts'
} satisfies DocumentConfig;
