import type { Checker, Equal } from '../../utils.tzen';
import type { At } from './index.tzen';

type _ = Checker<
  [
    Equal<At<'', 0>, undefined>,
    Equal<At<'a', 0>, 'a'>,
    Equal<At<'a', 1>, undefined>,
    Equal<At<'ab', 0>, 'a'>,
    Equal<At<'ab', 1>, 'b'>
  ]
>;
