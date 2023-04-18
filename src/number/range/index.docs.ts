export default {
  outputFilePath: 'number/range.mdx',
  setting: {
    slug: 'number/range',
    title: 'Range'
  },
  description: {
    en: 'Create an array of numbers progressing from the given start value up to, but not including the end value',
    zh: '创建一个数字数组，从给定的起始值开始，到但不包括结束值为止'
  },
  example: `
import type tt from 'type-toolkit';

type Range1 = tt.Number.Range<1, 5>; // [1, 2, 3, 4]
//    ^?
type Range2 = tt.Number.Range<1, 1>; // []
//    ^?
type Range3 = tt.Number.Range<55, 60>; // [55, 56, 57, 58, 59]
//    ^?
`,
  params: [
    {
      name: 'Start',
      type: 'number',
      description: {
        en: 'The start of the range',
        zh: '数字范围的起始值'
      }
    },
    {
      name: 'End',
      type: 'number',
      description: {
        en: 'The end of the range',
        zh: '数字范围的结束值'
      }
    }
  ],
  return: {
    type: 'number[]',
    description: {
      en: 'The range of numbers',
      zh: '数字范围'
    }
  },
  sourceFilePath: 'number/range/index.tzen',
  testFilePath: 'number/range/index.test.ts'
} satisfies DocumentConfig;
