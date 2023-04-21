export default {
  outputFilePath: 'object/get-property.mdx',
  setting: {
    slug: 'object/get-property',
    title: 'GetProperty'
  },
  description: {
    en: 'Get the value of the property by key path, similar to [get](https://lodash.com/docs/4.17.15#get) in lodash',
    zh: '通过键路径获取属性值，类似于 lodash 中的 [get](https://lodash.com/docs/4.17.15#get)'
  },
  params: [
    {
      name: 'O',
      type: 'object',
      description: {
        en: 'The object to query',
        zh: '要查询的对象'
      }
    },
    {
      name: 'KeyPath',
      type: "GetKeyPaths<O, { mode: 'string' }>",
      description: {
        en: 'The key path of the property to get',
        zh: '要获取的属性的键路径'
      }
    }
  ],
  return: {
    type: 'any',
    description: {
      en: 'The resolved value',
      zh: '解析后的值'
    }
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.Object.GetProperty<{ a: { b: { c: 'ah' } } }, 'a.b.c'> // 'ah'
//    ^?
type T1 = tt.Object.GetProperty<{ b: [1, { d: 2 }] }, 'b[0]'> // 1
//    ^?
type T2 = tt.Object.GetProperty<{ b: [1, { d: 2 }] }, 'b[1].d'> // 2
//    ^?
`,
  sourceFilePath: 'object/get-property/index.tzen',
  testFilePath: 'object/get-property/index.test.ts'
} satisfies DocumentConfig;
