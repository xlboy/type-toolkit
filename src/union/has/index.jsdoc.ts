/**
 * $$target-slot: Has
 *
 * Check if an element is included in a union type
 *
 * @param U Union
 * @param T The target element to check
 *
 * @returns (**boolean**): `true` if `T` is included in `U`, otherwise `false`
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.U.Has<'1' | '3', '1'>, // true
 * type T1 = tt.U.Has<'1' | '3', '2'>, // false
 * ```
 */
type Preview = 1;
