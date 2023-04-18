export default {
  outputFilePath: 'object/get-key-paths.mdx',
  setting: {
    slug: 'object/get-key-paths',
    title: 'GetKeyPaths'
  },
  description: {
    en: 'Returns all possible key paths of an object',
    zh: '返回一个对象的所有可能的键路径'
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
      name: 'Options',
      type: {
        code: {
          filePath: 'object/get-key-paths/index.tzen',
          line: [46, 52]
        },
        name: 'Options'
      },
      default: "{ mode: 'array' }",
      description: {
        en: 'Options',
        zh: '选项'
      }
    }
  ],
  return: {
    type: 'string[] | string',
    description: {
      en: 'Returns the key paths of `O`',
      zh: '返回 `O` 的键路径'
    }
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.O.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }> // ['a'] | ['a', 'b'] | ['d'] | ['d', 0] | ['d', 1] | ['d', 1, 'e']
//    ^?
type T1 = tt.O.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }, { mode: 'string' }> // 'a' | 'a.b' | 'd' | 'd[0]' | 'd[1]' | 'd[1].e'
//    ^?
`,
  sourceFilePath: 'object/get-key-paths/index.tzen',
  testFilePath: 'object/get-key-paths/index.test.ts'
} satisfies DocumentConfig;
