/**
 * $target-slot: Split
 *
 * Split a string into an array by a specified delimiter
 *
 * @param Str (**string**): The string to split
 * @param Delimiter (**string**): The delimiter used to split the string
 *
 * @returns (**string[]**): The array of the split string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.S.Split<'a-b-c', '-'> // ['a', 'b', 'c']
 * type T1 = tt.S.Split<'a->b->c', '->'> // ['a', 'b', 'c']
 * ```
 */
type Preview245 = 1;
