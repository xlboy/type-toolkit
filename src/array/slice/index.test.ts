import type { Equal, Checker } from '../../utils.tzen';
import type { Slice } from './index.tzen';

type _ = Checker<
  [
    Equal<Slice<[], 0, 0>, []>,
    Equal<Slice<[1, 2, 3, 4, 5], 1, 3>, [2, 3]>,
    Equal<Slice<[1, 2, 3, 4, 5], 1, 10>, [2, 3, 4, 5]>,
    Equal<Slice<[1, 2, 3, 4, 5], 10, 10>, []>
  ]
>;
