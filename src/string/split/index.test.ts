import type { Checker, Equal } from '../../utils.tzen';
import type { Split } from './index.tzen';

type _ = Checker<
  [
    Equal<Split<'123', ''>, ['1', '2', '3']>,
    Equal<Split<'123', '1'>, ['', '23']>,
    Equal<Split<'123', '2'>, ['1', '3']>,
    Equal<Split<'123', '3'>, ['12', '']>,
    Equal<Split<'123', '4'>, ['123']>,
    Equal<Split<'', ''>, []>,
    Equal<Split<'', '1'>, ['']>,
    Equal<Split<'1.3.43434.3434', '.'>, ['1', '3', '43434', '3434']>,
    Equal<Split<'1-3-eee.33-11', '-'>, ['1', '3', 'eee.33', '11']>,
    Equal<Split<'a->b->c', '->'>, ['a', 'b', 'c']>
  ]
>;
