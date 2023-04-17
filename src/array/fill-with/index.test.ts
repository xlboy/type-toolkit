import type { Equal, Checker } from '../../utils.tzen';
import type { FillWith } from './index.tzen';

type _ = Checker<
  [
    Equal<FillWith<'a', 3>, ['a', 'a', 'a']>,
    Equal<FillWith<1, 3>, [1, 1, 1]>,
    Equal<FillWith<true, 3>, [true, true, true]>
  ]
>;
