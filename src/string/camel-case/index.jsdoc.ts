/**
 * $$target-slot: CamelCase
 *
 * Converts string to camel case
 *
 * @param Str (**string**): String to convert
 *
 * @returns (**string**): Camel cased string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.S.CamelCase<'hello, world123'> // 'helloWorld123'
 * type T1 = tt.S.CamelCase<'Foo Bar'> // 'fooBar'
 * type T3 = tt.S.CamelCase<'--foo-bar--'> // 'fooBar'
 * type T4 = tt.S.CamelCase<'__FOO_BAR__'> // 'fooBar'
 * ```
 */
type Preview20346 = 1;
