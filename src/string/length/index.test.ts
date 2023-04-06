import type { Checker, Equal } from '../../utils.tzen';
import type { Length } from './index.tzen';

type _ = Checker<
  [
    Equal<Length<''>, 0>,
    Equal<Length<'a'>, 1>,
    Equal<Length<'ab'>, 2>,
    Equal<Length<'abc'>, 3>,
    Equal<Length<'abcd'>, 4>,
    Equal<Length<'abcde'>, 5>
  ]
>;
