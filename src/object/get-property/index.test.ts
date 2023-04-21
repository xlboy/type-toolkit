import type { Equal, Checker } from '../../utils.tzen';
import type { GetProperty, FilterNumberKey } from './index.tzen';
import type * as S from '../../string';

type _ = Checker<
  [
    Equal<FilterNumberKey<['a', '[3][4]', 'c', '[5]']>, ['a', '3', '4', 'c', '5']>,
    Equal<FilterNumberKey<S.Split<'b[1]', '.'>>, ['b', '1']>,
    Equal<GetProperty<{ a: { b: { c: 'ah' } } }, 'a.b.c'>, 'ah'>,
    Equal<GetProperty<{ b: [1, { d: 2 }] }, 'b[0]'>, 1>,
    Equal<GetProperty<{ b: [1, { d: 2 }] }, 'b[1].d'>, 2>
  ]
>;
