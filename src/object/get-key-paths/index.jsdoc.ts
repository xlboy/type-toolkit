/**
 * $$target-slot: GetKeyPaths
 *
 * Returns all possible key paths of an object.
 *
 * @param O (**object**): The object to query.
 * @param Options
 * ↓↓↓↓↓↓↓↓↓↓↓↓
 * 
 * - `Options.mode` (**'string' | 'array'**): The mode of the returned key paths. Default: `'array'`
 *
 * @returns (**string[] | string**): Returns the key paths of `O`.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.O.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }> // ['a'] | ['a', 'b'] | ['d'] | ['d', 0] | ['d', 1] | ['d', 1, 'e']
 * type T1 = tt.O.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }, { mode: 'string' }> // 'a' | 'a.b' | 'd' | 'd[0]' | 'd[1]' | 'd[1].e'
 * ```
 */
type Preview232142 = 1;
