/**
 * $$target-slot: SplitWords
 *
 * Splits string into an array of its words.
 *
 * @param Str (**string**): The string to inspect.
 *
 * @returns (**string[]**): The array of words.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.SplitWords<'fred, barney, & pebbles'> // ['fred', 'barney', 'pebbles']
 * type T1 = tt.String.SplitWords<'helloWORLD, hi, 111'>  // ['hello', 'WORLD', 'hi', '111']
 * ```
 */
type Preview10231 = 1;
