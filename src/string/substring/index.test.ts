import type { Equal, Checker } from '../../utils.tzen';
import type { Substring } from './index.tzen';

type _ = Checker<
  [
    Equal<Substring<'12345', 1, 3>, '23'>,
    Equal<Substring<'12345', 0, 3>, '123'>,
    Equal<Substring<'12345', 0, 5>, '12345'>,
    Equal<Substring<'12345', 0, 99>, '12345'>,
    Equal<Substring<'12345', 3>, '45'>,
    Equal<Substring<'12345', 1>, '2345'>
  ]
>;
