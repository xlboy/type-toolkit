import type { Checker, Equal } from '../../utils.tzen';
import type { Replace } from './index.tzen';

type _ = Checker<
  [
    Equal<Replace<'foobar', 'foo', 'bar'>, 'barbar'>,
    Equal<Replace<'foobar', 'b', 'a'>, 'fooaar'>,
    Equal<Replace<'wc\n1', 'c', 'a'>, 'wa\n1'>,
    Equal<Replace<'wc\n', '\n', 'a'>, 'wca'>
  ]
>;
