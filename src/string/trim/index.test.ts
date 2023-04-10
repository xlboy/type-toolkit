import type { Equal, Checker } from '../../utils.tzen';
import type { Trim } from './index.tzen';

type _ = Checker<
  [
    Equal<Trim<'  1  '>, '1'>,
    Equal<Trim<'  1 2  '>, '1 2'>,
    Equal<Trim<'  1 2 3  '>, '1 2 3'>
  ]
>;
