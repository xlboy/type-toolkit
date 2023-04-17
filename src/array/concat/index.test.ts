import type { Equal, Checker } from '../../utils.tzen';
import type { Concat } from './index.tzen';

type _ = Checker<
  [
    Equal<Concat<[], []>, []>,
    Equal<Concat<[], [1]>, [1]>,
    Equal<Concat<[1], []>, [1]>,
    Equal<Concat<[1], [2, 3, 4, ['..'?]]>, [1, 2, 3, 4, ['..'?]]>,
    Equal<Concat<[1, 2, 3, ['..'?]], [4]>, [1, 2, 3, ['..'?], 4]>,
    Equal<Concat<[number, string], [boolean, symbol]>, [number, string, boolean, symbol]>
  ]
>;
