import type { Equal, Checker } from '../../utils.tzen';
import type { Reverse } from './index.tzen';

type _ = Checker<
  [
    Equal<Reverse<[]>, []>,
    Equal<Reverse<[1, 2, 3]>, [3, 2, 1]>,
    Equal<Reverse<[1, '2', 3]>, [3, '2', 1]>
  ]
>;
