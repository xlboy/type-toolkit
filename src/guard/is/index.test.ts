import type { Equal, Checker } from '../../utils.tzen';
import type { Is } from './index.tzen';

type _ = Checker<
  [
    Equal<Is<'a', 'a' | 'b', '->'>, true>,
    Equal<Is<'a', 'a' | 'b', '<-'>, false>,
    Equal<Is<'a', 'a' | 'b', '==='>, false>,
    Equal<Is<'a' | 'b', 'a' | 'b', '==='>, true>
  ]
>;
