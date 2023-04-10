export default {
  outputFilePath: 'object/Simplify.mdx',
  description: {
    en: 'Flatten computed objects for better preview',
    zh: '将经过计算处理（交叉、...）的对象进行简化（扁平化），以便预览'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.O.Simplify<A & B & C> // { ...A, ...B, ...C }
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
