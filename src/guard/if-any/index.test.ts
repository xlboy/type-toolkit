import type { Equal, Checker } from '../../utils.tzen';
import type { IfAny } from './index.tzen';

type _ = Checker<
  [
    Equal<IfAny<any, 'yes', 'no'>, 'yes'>,
    Equal<IfAny<any, '__'>, '__'>,
    Equal<IfAny<undefined, 'yes'>, false>,
    Equal<IfAny<null, 'yes', 'no..'>, 'no..'>
  ]
>;
