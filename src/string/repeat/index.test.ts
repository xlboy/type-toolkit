import type { Equal, Checker } from '../../utils.tzen';
import type { Repeat } from './index.tzen';

type _ = Checker<
  [
    Equal<Repeat<'', 0>, ''>,
    Equal<Repeat<'-', 3>, '---'>,
    Equal<Repeat<'-_-', 3>, '-_--_--_-'>,
    Equal<Repeat<'-_-', 0>, '-_-'>
  ]
>;

