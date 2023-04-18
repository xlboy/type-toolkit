/**
 * $$target-slot: IndexOf
 *
 * Returns the index within the given string of the first occurrence of the specified value, or -1 if not found.
 *
 * @param StrSource (**string**): The string to search in.
 * @param SearchStr (**string**): The string to search for.
 * @param Position (**number**): The index to start the search at. Defaults to 0.
 *
 * @returns (**number**): The index of the first occurrence of the specified value, or -1 if not found.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.IndexOf<'', ''> // 0
 * type T1 = tt.String.IndexOf<'', 'a'> // -1
 * type T2 = tt.String.IndexOf<'01234', '2'> // 2
 * type T3 = tt.String.IndexOf<'01234--01234', '4', 5> // 11
 * ```
 */
type Preview175246 = 1;
