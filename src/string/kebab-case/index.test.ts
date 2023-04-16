import type { Equal, Checker } from '../../utils.tzen';
import type { KebabCase } from './index.tzen';

type _ = Checker<
  [
    Equal<KebabCase<'hello, world'>, 'hello-world'>,
    Equal<KebabCase<'hello, world123'>, 'hello-world-123'>,
    Equal<KebabCase<'foo bar'>, 'foo-bar'>,
    Equal<KebabCase<'fooBar'>, 'foo-bar'>,
    Equal<KebabCase<'__FOO_BAR__'>, 'foo-bar'>
  ]
>;
