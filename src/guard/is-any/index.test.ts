import type { Equal, Checker } from '../../utils.tzen';
import type { IsAny } from './index.tzen';

type _ = Checker<
  [
    Equal<IsAny<any>, true>,
    Equal<IsAny<never>, false>,
    Equal<IsAny<unknown>, false>,
    Equal<IsAny<undefined>, false>,
    Equal<IsAny<null>, false>
  ]
>;
