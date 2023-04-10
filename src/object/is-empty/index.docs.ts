export default {
  outputFilePath: 'object/is-empty.mdx',
  setting: {
    slug: 'object/is-empty',
    title: 'IsEmpty'
  },
  description: {
    en: 'Check if an object is empty',
    zh: '检查一个对象是否为空'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.O.IsEmpty<{}> // true
type T1 = tt.O.IsEmpty<{ a: 1 }> // false
`,
  params: [
    {
      name: 'O',
      type: 'object',
      description: {
        en: 'The object to check',
        zh: '要检查的对象'
      }
    }
  ],
  return: {
    type: 'boolean',
    description: {
      en: 'Whether the object is empty',
      zh: '对象是否为空'
    }
  },
  sourceFilePath: 'object/is-empty/index.tzen',
  testFilePath: 'object/is-empty/index.test.ts'
} satisfies DocumentConfig;
