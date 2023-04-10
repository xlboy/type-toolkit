export default {
  outputFilePath: 'object/GetWritableKeys.mdx',
  description: {
    en: 'Gets the key in the object that has write permission.',
    zh: '获得对象中具有写入权限的键'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.O.GetWritableKeys<{ a: 1 }> // 'a'
type T2 = tt.O.GetWritableKeys<{ a: 1, b: 2, readonly c: 3 }> // 'a' | 'b'
type T3 = tt.O.GetWritableKeys<{ readonly a: 1, readonly b: 2, readonly c: 3 }> // never
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
      en: 'The writable keys (single or multiple[union]), or `never` if there is none',
      zh: '可写键(单个或多个[union])，如果没有可写键则返回 never'
    }
  },
  sourceFilePath: 'object/get-writable-keys/index.tzen',
  testFilePath: 'object/get-writable-keys/index.test.ts'
} satisfies DocumentConfig;
