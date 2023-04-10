export default {
  outputFilePath: 'union/Has.mdx',
  description: {
    en: 'Check if an element is included in a union type',
    zh: '是否包含某个元素'
  },
  example: `
import type tt from 'type-toolkit';

type T0 = tt.U.Has<'1' | '3', '1'>; // true
type T1 = tt.U.Has<'1' | '3', '2'>; // false
`,
  params: [
    {
      name: 'U',
      description: {
        en: 'The union value to check',
        zh: '要检查的联合值'
      }
    },
    {
      name: 'T',
      description: {
        en: 'The target element to check',
        zh: '要检查的目标元素'
      }
    }
  ],
  return: {
    type: 'boolean',
    description: {
      en: '`true` if `T` is included in `U`, otherwise `false`.',
      zh: '如果 `U` 包含 `T` 则为 `true`，否则为 `false`。'
    }
  },
  sourceFilePath: 'union/has/index.tzen',
  testFilePath: 'union/has/index.test.ts'
} satisfies DocumentConfig;
