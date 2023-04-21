import type { Equal, Checker } from '../../utils.tzen';
import type { IfNever } from './index.tzen';

type _ = Checker<
  [
    Equal<IfNever<never, 'yes', 'no'>, 'yes'>,
    Equal<IfNever<never, '__'>, '__'>,
    Equal<IfNever<undefined, 'yes'>, false>,
    Equal<IfNever<null, 'yes', 'no..'>, 'no..'>
  ]
>;
