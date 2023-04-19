/**
 * $$target-slot: NonNullable
 *
 * Removes `null` and `undefined` or `?` from the array.
 *
 * @param Arr (**Array<any>**): The array to remove `null` and `undefined` or `?` from.
 *
 * @returns (**Array<any>**): The new array.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Array.NonNullable<[1 | null, 2 | undefined, 3]> // [1, 2, 3]
 * type T1 = tt.Array.NonNullable<[1 | null, 2, 3 | null, 4?]> // [1, 2, 3, 4]
 * type T2 = tt.Array.NonNullable<[null, 2, undefined, 4?]> // [2, 4]
 * type T3 = tt.Array.NonNullable<Array<1 | null | undefined | {}>> // Array<1 | {}>
 * ```
 */
type Preview140187 = 1;
