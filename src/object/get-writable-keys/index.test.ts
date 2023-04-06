import { Equal, Checker } from '../../utils.tzen';
import { GetWritableKeys } from './index.tzen';

type _ = Checker<
  [
    Equal<GetWritableKeys<{ a: 1; b: 2; c: 3 }>, 'a' | 'b' | 'c'>,
    Equal<GetWritableKeys<{ a: 1; b: 2; c: 3; readonly d: 4 }>, 'a' | 'b' | 'c'>,
    Equal<
      GetWritableKeys<{ a: 1; b: 2; c: 3; readonly d: 4; e: 5 }>,
      'a' | 'b' | 'c' | 'e'
    >,
    Equal<
      GetWritableKeys<{ a: 1; b: 2; c: 3; readonly d: 4; e: 5; readonly f: 6 }>,
      'a' | 'b' | 'c' | 'e'
    >,
    Equal<GetWritableKeys<{ readonly a: 1 }>, never>,
    Equal<GetWritableKeys<{ readonly a: 1; readonly b: 2 }>, never>,
    Equal<GetWritableKeys<{ readonly a: 1; readonly b: 2; readonly c: 3 }>, never>,
    Equal<GetWritableKeys<{ a: 1; b: 2; c: 3 } | { a: 1; b: 2; c: 3 }>, 'a' | 'b' | 'c'>,
    Equal<
      GetWritableKeys<{ a: 1; b: 2; c: 3 } | { a: 1; b: 2; c: 3; readonly d: 4 }>,
      'a' | 'b' | 'c'
    >,
    Equal<
      GetWritableKeys<{ a: 1; b: 2; c: 3 } | { a: 1; b: 2; c: 3; readonly d: 4; e: 5 }>,
      'a' | 'b' | 'c' | 'e'
    >
  ]
>;
