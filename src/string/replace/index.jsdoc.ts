/**
 * $$target-slot: Replace
 *
 * Replace occurrence of a substring in a string
 *
 * @param Str (**string**): The string to replace the substring in
 * @param SearchValue (**string**): The substring to replace
 * @param ReplaceValue (**string**): The string to replace the substring with
 * @param Options
 * ↓↓↓↓↓↓↓↓↓↓↓↓
 * 
 * - `Options.all` (**boolean**): Whether to replace all occurrences of the substring or just the first one
 *
 * @returns (**string**): replaced string
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.Replace<'hello world', 'l', 'L'> // 'heLlo world'
 * type T1 = tt.String.Replace<'hello world', 'l', 'L', { all: true }> // 'heLLo worLd'
 * ```
 */
type Preview34 = 1;
