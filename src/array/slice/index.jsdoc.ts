/**
 * $$target-slot: Slice
 *
 * Extract part of the array
 *
 * @param Arr (**Array<any>**): The array to extract from
 * @param Start (**number**): The beginning index of the specified portion of the array
 * @param End (**number**): The end index of the specified portion of the array.
 *
 * @returns (**Array<any>**): The extracted array
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.Slice<[1, 2, 3, 4, 5], 1, 3>  // [2, 3]
 * type T1 = tt.String.Slice<[1, 2, 3, 4, 5], 1, 10> // [2, 3, 4, 5]
 * type T2 = tt.String.Slice<[1, 2, 3, 4, 5], 10, 10> // []
 * ```
 */
type Preview23348 = 1;
