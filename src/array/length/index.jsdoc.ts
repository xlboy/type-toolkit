/**
 * $$target-slot: Length
 *
 * Get the length of an array.
 *
 * @param Arr  (**ReadonlyArray<any>**): The array to get the length from.
 *
 * @returns (**number**): The length of the array.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Array.Length<[]> // 0
 * type T1 = tt.Array.Length<[1]> // 1
 * type T2 = tt.Array.Length<[1, 2, 3]> // 3
 * ```
 */
type Preview216 = 1;
