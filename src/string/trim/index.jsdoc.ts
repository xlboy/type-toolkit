/**
 * $$target-slot: Trim
 *
 * Remove the spaces at the beginning and end of the string
 *
 * @param Str (**string**): The string to be trimmed
 *
 * @returns (**string**): The trimmed string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.Trim<'  1  '> // '1'
 * type T1 = tt.String.Trim<'  1 2  '> // '1 2'
 * type T2 = tt.String.Trim<'  1 2 3  '> // '1 2 3'
 * ```
 */
type Preview29231 = 1;
