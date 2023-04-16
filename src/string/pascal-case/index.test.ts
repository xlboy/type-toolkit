import type { Equal, Checker } from '../../utils.tzen';
import type { PascalCase } from './index.tzen';

type _ = Checker<
  [
    Equal<PascalCase<'hello, world123'>, 'HelloWorld123'>,
    Equal<PascalCase<'_foo_bar'>, 'FooBar'>,
    Equal<PascalCase<'__FOO_BAR__'>, 'FooBar'>,
    Equal<PascalCase<'foo bar'>, 'FooBar'>
  ]
>;
