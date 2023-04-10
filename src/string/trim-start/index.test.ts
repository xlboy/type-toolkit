import { Equal, Checker } from '../../utils.tzen';
import { TrimStart } from './index.tzen';

type _ = Checker<
  [
    Equal<TrimStart<'  11, 3'>, '11, 3'>,
    Equal<TrimStart<'     1'>, '1'>,
    Equal<TrimStart<'  1  '>, '1  '>
  ]
>;
