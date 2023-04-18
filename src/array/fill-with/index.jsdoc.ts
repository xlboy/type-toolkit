/**
 * $$target-slot: FillWith
 *
 * Fill an array with a specific value
 *
 * @param Element The value to fill
 * @param Length The length to fill
 *
 * @returns (**Array<any>**): The filled array
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Array.FillWith<'a', 3> // ['a', 'a', 'a']
 * type T1 = tt.Array.FillWith<1, 3> // [1, 1, 1]
 * type T2 = tt.Array.FillWith<true, 3> // [true, true, true]
 * ```
 */
type Preview128150 = 1;
