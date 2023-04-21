/**
 * $$target-slot: IfNever
 *
 * If the type is `never`, returns the first type, otherwise returns the second type.
 *
 * @param Target The type to check.
 * @param TrueType (**default: `true`**): The type to return if the type is `never`.
 * @param FalseType (**default: `false`**): The type to return if the type is not `never`.
 * 
 * @returns (**TrueType | FalseType**): If the type is `never`, returns `TrueType`, otherwise returns `FalseType`
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Guard.IfNever<never, 'yes', 'no'> // 'yes'
 * type T1 = tt.Guard.IfNever<never, '__'> // '__'
 * type T2 = tt.Guard.IfNever<undefined, 'yes'> // false
 * type T3 = tt.Guard.IfNever<null, 'yes', 'no..'> // 'no..'
 * ```
 */
type Preview5130 = 1;
