import type { Equal, Checker } from '../../utils.tzen';
import type { IsNever } from './index.tzen';

type _ = Checker<
  [
    Equal<IsNever<never>, true>,
    Equal<IsNever<undefined>, false>,
    Equal<IsNever<null>, false>,
    Equal<IsNever<0>, false>
  ]
>;
