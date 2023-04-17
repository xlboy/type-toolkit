import type { Equal, Checker } from '../../utils.tzen';
import type { Append } from './index.tzen';

type _ = Checker<
  [
    Equal<Append<[], 1>, [1]>,
    Equal<Append<[1], string>, [1, string]>,
    Equal<Append<string[], { a: 1 }>, [...string[], { a: 1 }]>
  ]
>;
