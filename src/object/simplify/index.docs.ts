export default {
  outputFilePath: 'object/simplify.mdx',
  setting: {
    slug: 'object/simplify',
    title: 'Simplify'
  },
  description: {
    en: 'Flatten computed objects for better preview',
    zh: '将经过计算处理（交叉、...）的对象进行简化（扁平化），以便预览'
  },
  example: `
import type tt from 'type-toolkit';

type UglyObject = { a: 1; b: 2 } & {
//    ^?
  c: { a: 1 } & { b: 2 } & { readonly c: 3 }
}

type SimplifiedObject = tt.Object.Simplify<UglyObject>
//    ^?
`,
  params: [
    {
      name: 'O',
      type: 'object',
      description: {
        en: 'The object to simplify',
        zh: '要简化的对象'
      }
    }
  ],
  return: {
    type: 'object',
    description: {
      en: 'The simplified object',
      zh: '简化好的对象'
    }
  },
  sourceFilePath: 'object/simplify/index.tzen',
  testFilePath: 'object/simplify/index.test.ts'
} satisfies DocumentConfig;
