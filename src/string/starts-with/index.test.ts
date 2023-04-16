import type { Equal, Checker } from '../../utils.tzen';
import type { StartsWith } from './index.tzen';

type _ = Checker<
  [
    Equal<StartsWith<'123-', '1'>, true>,
    Equal<StartsWith<'123-', '12'>, true>,
    Equal<StartsWith<'123-', '1-'>, false>,
    Equal<StartsWith<'123-', '2'>, false>
  ]
>;
