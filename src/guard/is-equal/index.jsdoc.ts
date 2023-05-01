/**
 * $$target-slot: IsEqual
 *
 * Checks if the two types are equal.
 *
 * @param X The first type to check.
 * @param Y The second type to check.
 *
 * @returns (**boolean**): `true` if the two types are equal, otherwise `false`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Guard.IsEqual<1, false> // false
 * type T1 = tt.Guard.IsEqual<1, 1> // true
 * type T2 = tt.Guard.IsEqual<'1' | '2', '2'> // false
 * type T3 = tt.Guard.IsEqual<'1' | '2', '2' | '1'> // true
 * type T4 = tt.Guard.IsEqual<{ a: 1 }, { a: 1 }> // true
 * type T5 = tt.Guard.IsEqual<{ a: 1 }, { a?: 1 }> // false
 * type T6 = tt.Guard.IsEqual<() => boolean, () => void> // false
 * type T7 = tt.Guard.IsEqual<() => void, (a: number) => void> // false
 * type T8 = tt.Guard.IsEqual<(a: number) => void, (b: number) => void> // true
 * ```
 */
type Preview6479 = 1;
