/**
 * $$target-slot: PascalCase
 *
 * Converts string to [pascal case](https://en.wikipedia.org/wiki/PascalCase)
 *
 * @param Str (**string**): String to convert
 *
 * @returns (**string**): The pascal cased string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.PascalCase<'hello, world123'> // 'HelloWorld123'
 * type T1 = tt.String.PascalCase<'Foo Bar'> // 'FooBar'
 * type T3 = tt.String.PascalCase<'--foo-bar--'> // 'FooBar'
 * type T4 = tt.String.PascalCase<'__FOO_BAR__'> // 'FooBar'
 * ```
 */
type Preview247112 = 1;
