import type { Equal, Checker } from '../../utils.tzen';
import type { IndexOf } from './index.tzen';

type _ = Checker<
  [
    Equal<IndexOf<'', ''>, 0>,
    Equal<IndexOf<'', 'a'>, -1>,
    Equal<IndexOf<'a', ''>, 0>,
    Equal<IndexOf<'01234', '2'>, 2>,
    Equal<IndexOf<'01234', '3'>, 3>,
    Equal<IndexOf<'01234--01234', '4', 5>, 11>
  ]
>;
