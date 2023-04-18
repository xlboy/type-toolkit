/**
 * $$target-slot: Last
 *
 * Gets the first element of `array`.
 *
 * @param Arr (**Array<any>**): The array to get the last element from.
 *
 * @returns (**any**): The last element of `array`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Array.Last<[1, 2, 3]> // 3
 * type T1 = tt.Array.Last<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]> // 10
 * type T2 = tt.Array.Last<[1, 2, 'g', 'h', 'i', 'x', 'y', 'z']> // 'z'
 * type T3 = tt.Array.Last<[true, false, true, false, true, false]> // false
 * ```
 */
type Preview82125 = 1;
