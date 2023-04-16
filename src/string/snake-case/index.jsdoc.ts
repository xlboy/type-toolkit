/**
 * $$target-slot: SnakeCase
 *
 * Converts string to [snake case](https://en.wikipedia.org/wiki/Letter_case#Snake_case)
 *
 * @param Str (**string**): String to convert
 *
 * @returns (**string**): Snake cased string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.S.KebabCase<'hello, world'> // 'hello_world'
 * type T1 = tt.S.KebabCase<'foo bar'> // 'foo_bar'
 * type T2 = tt.S.KebabCase<'fooBar'> // 'foo_bar'
 * type T3 = tt.S.KebabCase<'__FOO_BAR__'> // 'foo_bar'
 * ```
 */
type Preview326 = 1;
