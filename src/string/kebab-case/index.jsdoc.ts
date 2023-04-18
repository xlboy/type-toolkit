/**
 * $$target-slot: KebabCase
 *
 * Converts string to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)
 *
 * @param Str (**string**): String to convert
 *
 * @returns (**string**): Kebab cased string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.KebabCase<'hello, world'> // 'hello-world'
 * type T1 = tt.String.KebabCase<'foo bar'> // 'foo-bar'
 * type T2 = tt.String.KebabCase<'fooBar'> // 'foo-bar'
 * type T3 = tt.String.KebabCase<'__FOO_BAR__'> // 'foo-bar'
 * ```
 */
type Preview5874 = 1;
