import type { Equal, Checker } from '../../utils.tzen';
import type { IsEqual } from './index.tzen';

type _ = Checker<
  [
    Equal<IsEqual<1, false>, false>,
    Equal<IsEqual<1, 1>, true>,

    Equal<IsEqual<'1' | '2', '2'>, false>,
    Equal<IsEqual<'1' | '2', '2' | '1'>, true>,

    Equal<IsEqual<{ a: 1 }, { a: 1 }>, true>,
    Equal<IsEqual<{ a: 1 }, { a?: 1 }>, false>,
    Equal<IsEqual<{ a: 1 }, { a: 1; b: 2 }>, false>,
    Equal<IsEqual<{ a: 1; b: 2 }, { a: 1 }>, false>,
    Equal<IsEqual<{ a: 1; b: 2 }, { a: 1; b: 2 }>, true>,

    Equal<IsEqual<() => void, () => void>, true>,
    Equal<IsEqual<() => boolean, () => void>, false>,
    Equal<IsEqual<() => void, (a: number) => void>, false>,
    Equal<IsEqual<(a: number) => void, (b: number) => void>, true>
  ]
>;
