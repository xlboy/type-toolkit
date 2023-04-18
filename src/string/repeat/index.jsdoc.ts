/**
 * $$target-slot: Repeat
 *
 * Repeats a given string a specified number of times and returns the concatenated result.
 *
 * @param StrSource (**string**): The string to repeat
 * @param Count (**number**): The number of times to repeat the string
 *
 * @returns (**string**): The repeated string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.Repeat<'-', 3> // '---'
 * type T1 = tt.String.Repeat<'-_-', 3> // '-_--_--_-'
 * type T2 = tt.String.Repeat<'-_-', 0> // '-_-'
 * ```
 */
type Preview231 = 1;
