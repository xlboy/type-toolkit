import type { Equal, Checker } from '../../utils.tzen';
import type { Range } from './index.tzen';

type _ = Checker<
  [
    Equal<Range<1, 5>, [1, 2, 3, 4]>,
    Equal<Range<1, 1>, []>,
    Equal<Range<55, 60>, [55, 56, 57, 58, 59]>,
    // Equal<Range<1500, 1505>, [1500, 1501, 1502, 1503, 1504]>,
    Equal<Range<0, 0>, []>,
    Equal<Range<0, 1>, [0]>,
    Equal<Range<0, 2>, [0, 1]>,
    // Equal<Range<1, 2000>['length'], 1999>
  ]
>;