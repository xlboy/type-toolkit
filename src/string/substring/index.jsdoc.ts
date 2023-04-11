/**
 * $$target-slot: Substring
 *
 * Extracts a substring from a string at a specified location
 *
 * @param StrSource (**string**): The string to extract from
 * @param Start (**number**): The index to start extracting from
 * @param End (**number, default: `-1`**): The index to stop extracting at, if `-1` then the end of the string is used
 *
 * @returns (**string**): The extracted substring
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.S.Substring<'12345', 1, 3> // '23'
 * type T1 = tt.S.Substring<'12345', 1> // '2345'
 * type T2 = tt.S.Substring<'12345', 1, 2> // '2'
 * ```
 */
type Preview250168 = 1;
