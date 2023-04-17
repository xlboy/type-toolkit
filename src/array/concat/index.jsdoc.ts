/**
 * $$target-slot: Concat
 *
 * Connect two arrays together, return a new array
 *
 * @param Arr1 (**Array<any>**): The first array
 * @param Arr2 (**Array<any>**): The second array
 *
 * @returns (**Array<any>**): The new array after connection
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.A.Concat<[1], [2, 3, 4, ['..'?]]> // [1, 2, 3, 4, ['..'?]]
 * type T1 = tt.A.Concat<[number, string], [boolean, 1]> // [number, string, boolean, 1]
 * ```
 */
type Preview194245 = 1;
