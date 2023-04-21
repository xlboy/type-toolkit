import type { Equal, Checker } from '../../utils.tzen';
import type { GetKeyPaths } from './index.tzen';

type O1 = {
  a: { b: 1; c: 2 };
  d?: 3;
  readonly e: 4;
  f: [
    5,
    6,
    {
      g: 7;
      b: [
        {
          c: 8;
        }
      ];
    }
  ];
};

type _ = Checker<
  [
    Equal<GetKeyPaths<{ a: { b: 1 } }>, ['a'] | ['a', 'b']>,
    Equal<GetKeyPaths<{ a: { b: 1; c: 2 } }>, ['a'] | ['a', 'b'] | ['a', 'c']>,
    Equal<
      GetKeyPaths<{ a: { b: 1; c: 2 }; d: 3 }>,
      ['a'] | ['a', 'b'] | ['a', 'c'] | ['d']
    >,
    Equal<
      GetKeyPaths<O1>,
      | ['a']
      | ['a', 'b']
      | ['a', 'c']
      | ['d']
      | ['e']
      | ['f']
      | ['f', 0]
      | ['f', 1]
      | ['f', 2]
      | ['f', 2, 'g']
      | ['f', 2, 'b']
      | ['f', 2, 'b', 0]
      | ['f', 2, 'b', 0, 'c']
    >,
    Equal<
      GetKeyPaths<O1, { mode: 'string' }>,
      | 'a'
      | 'd'
      | 'e'
      | 'f'
      | 'a.b'
      | 'a.c'
      | 'f[0]'
      | 'f[1]'
      | 'f[2]'
      | 'f[2].b'
      | 'f[2].b[0]'
      | 'f[2].b[0].c'
      | 'f[2].g'
    >,
    Equal<GetKeyPaths<[1, { b: [] }]>, [0] | [1] | [1, 'b']>,
    Equal<GetKeyPaths<[1, { b: [] }], { mode: 'string' }>, '[0]' | '[1]' | '[1].b'>,
    Equal<GetKeyPaths<[]>, never>,
    Equal<GetKeyPaths<{}>, never>
  ]
>;
