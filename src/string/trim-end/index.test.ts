import { Equal, Checker } from '../../utils.tzen';
import { TrimEnd } from './index.tzen';

type _ = Checker<
  [
    Equal<TrimEnd<'1 1, 3  '>, '1 1, 3'>,
    Equal<TrimEnd<'  1  '>, '  1'>,
    Equal<TrimEnd<'.1-- '>, '.1--'>
  ]
>;
