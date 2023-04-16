import type { Equal, Checker } from '../../utils.tzen';
import type { CamelCase } from './index.tzen';

type _ = Checker<
  [
    Equal<CamelCase<'hello, world123'>, 'helloWorld123'>,
    Equal<CamelCase<'Foo Bar'>, 'fooBar'>,
    Equal<CamelCase<'fooBar123-dsfWord'>, 'fooBar123DsfWord'>,
    Equal<CamelCase<'--foo-bar--'>, 'fooBar'>,
    Equal<CamelCase<'__FOO_BAR__'>, 'fooBar'>
  ]
>;
