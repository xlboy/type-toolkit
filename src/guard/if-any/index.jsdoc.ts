/**
 * $$target-slot: IfAny
 *
 * If the type is `any`, returns the first type, otherwise returns the second type.
 *
 * @param Target The type to check.
 * @param TrueType (**default: `true`**): The type to return if the type is `any`.
 * @param FalseType (**default: `false`**): The type to return if the type is not `any`.
 *
 * @returns (**TrueType | FalseType**): If the type is `any`, returns `TrueType`, otherwise returns `FalseType`
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Guard.IfAny<any, 'yes', 'no'> // 'yes'
 * type T1 = tt.Guard.IfAny<any, '__'> // '__'
 * type T2 = tt.Guard.IfAny<undefined, 'yes'> // false
 * type T3 = tt.Guard.IfAny<null, 'yes', 'no..'> // 'no..'
 * ```
 */
type Preview15877 = 1;
