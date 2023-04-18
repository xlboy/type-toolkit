export default {
  outputFilePath: 'object/get-writable-keys.mdx',
  setting: {
    slug: 'object/get-writable-keys',
    title: 'GetWritableKeys'
  },
  description: {
    en: 'Gets the key in the object that has write permission.',
    zh: '获得对象中具有写入权限的键'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.Object.GetWritableKeys<{ a: 1 }> // 'a'
//    ^?
type T2 = tt.Object.GetWritableKeys<{ a: 1, b: 2, readonly c: 3 }> // 'a' | 'b'
//    ^?
type T3 = tt.Object.GetWritableKeys<{ readonly a: 1, readonly b: 2, readonly c: 3 }> // never
//    ^?
`,
  params: [
    {
      name: 'O',
      type: 'object',
      description: {
        en: 'The object to get the writable keys from',
        zh: '要获取可写键的对象'
      }
    }
  ],
  return: {
    type: 'string | never',
    description: {
      en: 'The key in the object that has write permission. If there is no writable key, return `never`',
      zh: '具有写入权限的键。如果没有可写键，则返回 `never`'
    }
  },
  sourceFilePath: 'object/get-writable-keys/index.tzen',
  testFilePath: 'object/get-writable-keys/index.test.ts'
} satisfies DocumentConfig;
