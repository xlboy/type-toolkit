import type { Equal, Checker } from '../../utils.tzen';
import type { GetProperty } from './index.tzen';

type _ = Checker<
  [
    Equal<GetProperty<{ a: { b: { c: 'ah' } } }, 'a.b.c'>, 'ah'>,
    Equal<GetProperty<{ b: [1, { d: 2 }] }, 'b[0]'>, 1>,
    Equal<GetProperty<{ b: [1, { d: 2 }] }, 'b[1].d'>, 2>
  ]
>;
