import type { Equal, Checker } from '../../utils.tzen';
import type { NonNullable } from './index.tzen';

type _ = Checker<
  [
    Equal<NonNullable<[1 | null, 2 | undefined, 3]>, [1, 2, 3]>,
    Equal<NonNullable<[1 | null, 2, 3 | null, 4?]>, [1, 2, 3, 4]>,
    Equal<NonNullable<[null, 2, undefined, 4?]>, [2, 4]>,
    Equal<NonNullable<Array<1 | null | undefined | {}>>, Array<1 | {}>>
  ]
>;
