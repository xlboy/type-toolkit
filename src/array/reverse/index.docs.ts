export default {
  outputFilePath: 'array/reverse.mdx',
  setting: {
    slug: 'array/reverse',
    title: 'Reverse'
  },
  description: {
    en: 'Reverse array',
    zh: '反转数组'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.A.Reverse<[1, 2, 3]> // [3, 2, 1]
//    ^?
type T1 = tt.A.Reverse<[1, '2', 3]> // [3, '2', 1]
//    ^?
`,
  params: [
    {
      name: 'Arr',
      type: 'Array<any>',
      description: {
        en: 'Array to reverse',
        zh: '要反转的数组'
      }
    }
  ],
  return: {
    type: 'Array<any>',
    description: {
      en: 'Reversed array',
      zh: '反转后的数组'
    }
  },
  sourceFilePath: 'array/reverse/index.tzen',
  testFilePath: 'array/reverse/index.test.ts'
} as DocumentConfig;
