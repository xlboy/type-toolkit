import type { Equal, Checker } from '../../utils.tzen';
import type { RenameByKeyPath } from './index.tzen';

type _ = Checker<
  [
    Equal<
      RenameByKeyPath<{ a: { b: { ee: 'eee3' } } }, 'a.b.ee', 'haha'>,
      { a: { b: { haha: 'eee3' } } }
    >,
    Equal<RenameByKeyPath<{ a: { b: 1 } }, 'a.b', 'c'>, { a: { c: 1 } }>
  ]
>;
