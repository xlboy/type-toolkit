/**
 * $target-slot: Pop
 *
 * Delete the last element in the array
 *
 * @param Arr The source of the array to delete the last element from
 *
 * @returns (**Arr.slice(0, Arr.length - 1)**): The array without the last element
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.A.Pop<[1, 2, 3]> //  [1, 2]
 * type T1 = tt.A.Pop<[1, 2, 3, 4]> // [1, 2, 3]
 * ```
 */
type Preview57 = 1;
