import type { Equal, Checker } from '../utils.tzen';
import type { FlattenKeyPaths } from './_internal.tzen';

type _ = Checker<
  [
    Equal<FlattenKeyPaths<'a[3][4].c[5]'>, ['a', '3', '4', 'c', '5']>,
    Equal<FlattenKeyPaths<'b[1]'>, ['b', '1']>,
    Equal<FlattenKeyPaths<'a.b.c'>, ['a', 'b', 'c']>,
    Equal<FlattenKeyPaths<'b[0]'>, ['b', '0']>,
    Equal<FlattenKeyPaths<'b[1].d'>, ['b', '1', 'd']>
  ]
>;
