/**
 * $$target-slot: TrimStart
 *
 * Remove the spaces at the beginning of the string
 *
 * @param Str (**string**): The string to be trimmed
 *
 * @returns (**string**): The trimmed string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.TrimStart<'  11, 3'> // '11, 3'
 * type T1 = tt.String.TrimStart<'     1'> // '1'
 * type T2 = tt.String.TrimStart<'  1  '> // '1  '
 * ```
 */
type Preview116 = 1;
