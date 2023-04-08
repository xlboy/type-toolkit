/**
 * $target-slot: Join
 *
 * Join the elements in an array into a string using a specified delimiter.
 *
 * @param Strings The strings to join (numbers/strings)
 * @param Delimiter (**default: `''`**): Delimiter to join the strings with
 *
 * @returns (**string**): The joined string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.A.Join<['a', 'b', 'c'], '-'> // 'a-b-c' 
 * type T1 = tt.A.Join<['a', 'b', 'c'], ' '> // 'a b c'
 * type T2 = tt.A.Join<['a', 'b', 'c'], ' or '> // 'a or b or c'
 * ```
 */
type Preview76= 1;
