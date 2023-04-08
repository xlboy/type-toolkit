import type { Checker, Equal } from '../../utils.tzen';
import type { Join } from './index.tzen';

type _ = Checker<
  [
    Equal<Join<[]>, ''>,
    Equal<Join<['a'], ','>, 'a'>,
    Equal<Join<['a', 'b'], ','>, 'a,b'>,
    Equal<Join<['a', 'b', 'c'], ','>, 'a,b,c'>,
    Equal<Join<['a', 'b', 'c'], ' '>, 'a b c'>,
    Equal<Join<['a', 'b', 'c'], ' and '>, 'a and b and c'>,
    Equal<Join<['a', 'b', 'c'], ' or '>, 'a or b or c'>
  ]
>;
