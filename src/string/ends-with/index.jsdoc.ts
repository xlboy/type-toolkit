/**
 * $$target-slot: EndWith
 *
 * Checks if string ends with the given target string.
 *
 * @param Str (**string**): The string to inspect.
 * @param Target (**string**): The string to search for.
 *
 * @returns (**boolean**): Returns `true` if string ends with `target`, else `false`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.S.EndsWith<'123-', '3-'> // true
 * type T1 = tt.S.EndsWith<'123-', '-'> // true
 * type T2 = tt.S.EndsWith<'123-', '3'> // false
 * ```
 */
type Preview86108 = 1;
