import type { Equal, Checker } from '../../utils.tzen';
import type { Last } from './index.tzen';

type _ = Checker<
  [
    Equal<Last<[1, 2, 3]>, 3>,
    Equal<Last<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>, 10>,
    Equal<Last<[1, 2, 'g', 'h', 'i', 'x', 'y', 'z']>, 'z'>,
    Equal<Last<[true, false, true, false, true, false]>, false>
  ]
>;
