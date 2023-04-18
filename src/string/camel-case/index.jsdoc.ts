/**
 * $$target-slot: CamelCase
 *
 * Converts string to [camel case](https://en.wikipedia.org/wiki/CamelCase)
 *
 * @param Str (**string**): String to convert
 *
 * @returns (**string**): Camel cased string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.CamelCase<'hello, world123'> // 'helloWorld123'
 * type T1 = tt.String.CamelCase<'Foo Bar'> // 'fooBar'
 * type T3 = tt.String.CamelCase<'--foo-bar--'> // 'fooBar'
 * type T4 = tt.String.CamelCase<'__FOO_BAR__'> // 'fooBar'
 * ```
 */
type Preview20346 = 1;
