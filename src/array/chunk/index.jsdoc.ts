/**
 * $$target-slot: Chunk
 *
 * Split an array into multiple arrays of specified size.
 *
 * @param Arr (**Array<any>**): The array to split.
 * @param Size (**number**): The size of each chunk.
 *
 * @returns (**Array<Array<any>>**): The array after splitting.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Array.Chunk<[], 1> // []
 * type T1 = tt.Array.Chunk<[1, 2, 3, 4], 1> // [[1], [2], [3], [4]]
 * type T2 = tt.Array.Chunk<[1, 2, 3, 4], 2> // [[1, 2], [3, 4]]
 * type T3 = tt.Array.Chunk<[1, 2, 3, 4], 3> // [[1, 2, 3], [4]]
 * ```
 */
type Preview52237 = 1;
