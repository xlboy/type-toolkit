import { Equal, Checker } from '../../utils.tzen';
import { Has } from './index.tzen';

type _ = Checker<
  [
    Equal<Has<1 | 2, 1>, true>,
    Equal<Has<1 | 2, 3>, false>,
    Equal<Has<1 | 2 | 3, 1 | 2>, true>,
    Equal<Has<1 | 2 | 3, 1 | 2 | 3>, true>,
    Equal<Has<'1' | '2', '1'>, true>,
    Equal<Has<'1' | '2', '3'>, false>,
  ]
>;
