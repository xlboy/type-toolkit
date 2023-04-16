import type { Equal, Checker } from '../../utils.tzen';
import type { SnakeCase } from './index.tzen';

type _ = Checker<
  [
    Equal<SnakeCase<'hello, world'>, 'hello_world'>,
    Equal<SnakeCase<'hello, world123'>, 'hello_world_123'>,
    Equal<SnakeCase<'foo bar'>, 'foo_bar'>,
    Equal<SnakeCase<'fooBar'>, 'foo_bar'>,
    Equal<SnakeCase<'__FOO_BAR__'>, 'foo_bar'>
  ]
>;
