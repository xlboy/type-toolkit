import type { Checker, Equal } from '../../utils.tzen';
import type { Length } from './index.tzen';

type _ = Checker<
  [
    Equal<Length<[]>, 0>,
    Equal<Length<[1]>, 1>,
    Equal<Length<[1, 2]>, 2>,
    Equal<Length<[1, 2, 3]>, 3>
  ]
>;
