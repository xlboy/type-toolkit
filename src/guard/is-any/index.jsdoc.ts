/**
 * $$target-slot: IsAny
 *
 * Checks if the type is `any`.
 *
 * @param Target The type to chec
 *
 * @returns (**boolean**): `true` if the type is `any`, otherwise `false`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Guard.IsAny<any> // true
 * type T1 = tt.Guard.IsAny<never> // false
 * type T2 = tt.Guard.IsAny<unknown> // false
 * type T3 = tt.Guard.IsAny<undefined> // false
 * ```
 */
type Preview91220 = 1;
