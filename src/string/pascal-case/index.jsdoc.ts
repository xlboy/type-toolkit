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
 * type T0 = tt.S.PascalCase<'hello, world123'> // 'HelloWorld123'
 * type T1 = tt.S.PascalCase<'Foo Bar'> // 'FooBar'
 * type T3 = tt.S.PascalCase<'--foo-bar--'> // 'FooBar'
 * type T4 = tt.S.PascalCase<'__FOO_BAR__'> // 'FooBar'
 * ```
 */
type Preview247112 = 1;
