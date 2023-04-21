/**
 * $$target-slot: IsNever
 *
 * Checks if the type is `never`.
 *
 * @param Target The type to check
 *
 * @returns (**boolean**): `true` if the type is `never`, otherwise `false`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Guard.IsNever<never> // true
 * type T1 = tt.Guard.IsNever<undefined> // false
 * type T2 = tt.Guard.IsNever<null> // false
 * ```
 */
type Preview16356 = 1;
