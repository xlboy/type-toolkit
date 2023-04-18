export default {
  outputFilePath: 'object/get-key-paths.mdx',
  setting: {
    slug: 'object/get-key-paths',
    title: 'GetKeyPaths'
  },
  description: {
    en: 'Gets all possible key paths of the object',
    zh: '获取对象中所有可能的键路径'
  },
  params: [
    {
      name: 'O',
      type: 'object',
      description: {
        en: 'The object to get key paths',
        zh: '要获取键路径的对象'
      }
    },
    {
      name: 'Options',
      type: {
        code: {
          filePath: 'object/get-key-paths/index.tzen',
          line: [46, 54]
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
      en: 'All possible key paths. Depends on `Options.mode`',
      zh: '所有可能的键路径。具体取决于 `Options.mode`'
    }
  },
  example: `
import type tt from 'type-toolkit'

type T0 = tt.Object.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }> // ['a'] | ['a', 'b'] | ['d'] | ['d', 0] | ['d', 1] | ['d', 1, 'e']
//    ^?
type T1 = tt.Object.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }, { mode: 'string' }> // 'a' | 'a.b' | 'd' | 'd[0]' | 'd[1]' | 'd[1].e'
//    ^?
`,
  sourceFilePath: 'object/get-key-paths/index.tzen',
  testFilePath: 'object/get-key-paths/index.test.ts'
} satisfies DocumentConfig;
