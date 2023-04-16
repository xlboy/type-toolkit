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
 * type T0 = tt.S.KebabCase<'hello, world'> // 'hello-world'
 * type T1 = tt.S.KebabCase<'foo bar'> // 'foo-bar'
 * type T2 = tt.S.KebabCase<'fooBar'> // 'foo-bar'
 * type T3 = tt.S.KebabCase<'__FOO_BAR__'> // 'foo-bar'
 * ```
 */
type Preview5874 = 1;
