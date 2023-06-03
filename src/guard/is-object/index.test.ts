import type { Equal, Checker } from '../../utils.tzen';
import type { IsObject } from './index.tzen';

type _ = Checker<
  [
    Equal<IsObject<{}>, true>,
    Equal<IsObject<[]>, false>,
    Equal<IsObject<readonly []>, false>,
    Equal<IsObject<() => void>, false>,
    Equal<IsObject<1>, false>,
    Equal<IsObject<'a'>, false>,
    Equal<IsObject<true>, false>,
    Equal<IsObject<undefined>, false>,
    Equal<IsObject<null>, false>,
    Equal<IsObject<symbol>, false>,
    Equal<IsObject<bigint>, false>,
    Equal<IsObject<never>, false>,
    Equal<IsObject<unknown>, false>,
    Equal<IsObject<any>, false>
  ]
>;
