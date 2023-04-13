/**
 * $$target-slot: Join
 *
 * Adds all the elements of an array into a string, separated by the specified separator string.
 *
 * @param Array (**ReadonlyArray<string | number>**): The array to concat (numbers/strings)
 * @param Separator (**string, default: `''`**): A string separator
 *
 * @returns (**string**): The concatenated string
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
