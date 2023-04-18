import type { Equal, Checker } from '../../utils.tzen';
import type { Head } from './index.tzen';

type _ = Checker<
  [
    Equal<Head<[1, 2, 3]>, 1>,
    Equal<Head<['1', 2]>, '1'>,
    Equal<Head<number[]>, number>,
    Equal<Head<[]>, never>
  ]
>;
