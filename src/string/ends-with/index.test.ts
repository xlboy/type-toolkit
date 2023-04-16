import type { Equal, Checker } from '../../utils.tzen';
import type { EndsWith } from './index.tzen';

type _ = Checker<
  [
    Equal<EndsWith<'123-', '3-'>, true>,
    Equal<EndsWith<'123-', '-'>, true>,
    Equal<EndsWith<'123-', '3'>, false>
  ]
>;
