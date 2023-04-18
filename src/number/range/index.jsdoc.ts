/**
 * $$target-slot: Range
 *
 * create an array of numbers progressing from the given start value up to, but not including the end value.
 *
 * @param Start (**number**): The start of the range.
 * @param End (**number**): The end of the range.
 *
 * @returns (**number[]**): Returns the range of numbers.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type Range1 = tt.Number.Range<1, 5> // [1, 2, 3, 4]
 * type Range2 = tt.Number.Range<1, 1> // []
 * type Range3 = tt.Number.Range<55, 60> // [55, 56, 57, 58, 59]
 * ```
 */
type Preview230184 = 1;
