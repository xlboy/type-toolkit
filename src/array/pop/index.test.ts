import { Checker, Equal } from '../../utils.tzen';
import { Pop } from './index.tzen';

type _ = Checker<
  [
    Equal<Pop<[1, 2, 3]>, [1, 2]>,
    Equal<Pop<[1, 2]>, [1]>,
    Equal<Pop<[1]>, []>,
    Equal<Pop<[]>, unknown[]>,
    Equal<Pop<['1', '2', '3', '']>, ['1', '2', '3']>
  ]
>;
