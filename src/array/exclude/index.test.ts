import type { Equal, Checker } from '../../utils.tzen';
import type { Exclude } from './index.tzen';

type _ = Checker<
  [
    Equal<Exclude<['a', 'b', 'c'], 'a'>, ['b', 'c']>,
    Equal<
      Exclude<[{ a: 1 }, 'b', 'a' | null, 'c'?], { a: 1 } | null | undefined>,
      ['b', 'a', 'c']
    >,
    Equal<Exclude<[], 'a'>, []>
  ]
>;
