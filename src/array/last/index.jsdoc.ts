/**
 * $$target-slot: Last
 *
 * Returns the last element of an array.
 *
 * @param Arr (**Array<any>**): The array to query.
 *
 * @returns (**any**): Returns the last element of `Arr`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.A.Last<[1, 2, 3]> // 3
 * type T1 = tt.A.Last<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]> // 10
 * type T2 = tt.A.Last<[1, 2, 'g', 'h', 'i', 'x', 'y', 'z']> // 'z'
 * type T3 = tt.A.Last<[true, false, true, false, true, false]> // false
 * ```
 */
type Preview82125 = 1;
