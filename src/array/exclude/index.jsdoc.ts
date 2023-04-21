/**
 * $$target-slot: Exclude
 *
 * Exclude certain elements from an array
 *
 * @param Arr (**Array<any>**): The array to exclude elements from
 * @param Element The elements to exclude
 *
 * @returns (**Array<any>**): The array without the excluded elements
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Array.Exclude<['a', 'b', 'c'], 'a' | 'c'> // ['b']
 * type T1 = tt.Array.Exclude<[{ a: 1 }, 'b', 'a' | null, 'c'?], { a: 1 } | null | undefined> // ['b', 'a', 'c']
 * ```
 */
type Preview24396 = 1;
