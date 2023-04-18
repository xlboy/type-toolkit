/**
 * $$target-slot: StartsWith
 *
 * Checks if string starts with the given target string.
 *
 * @param Str (**string**): The string to inspect.
 * @param Target (**string**): The string to search for.
 *
 * @returns (**boolean**): Returns `true` if string starts with `target`, else `false`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.StartsWith<'123-', '1'> // true
 * type T1 = tt.String.StartsWith<'123-', '12'> // true
 * type T2 = tt.String.StartsWith<'123-', '1-'> // false
 * type T3 = tt.String.StartsWith<'123-', '2'> // false
 * ```
 */
type Preview5247 = 1;
