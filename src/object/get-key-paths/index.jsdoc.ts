/**
 * $$target-slot: GetKeyPaths
 *
 * Gets all possible key paths of the object
 *
 * @param O (**object**): The object to get key paths
 * @param Options
 * ↓↓↓↓↓↓↓↓↓↓↓↓
 * 
 * - `Options.mode` (**'string' | 'array'**): The mode of the returned key paths. Default: `'array'`
 *
 * @returns (**string[] | string**): All possible key paths
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Object.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }> // ['a'] | ['a', 'b'] | ['d'] | ['d', 0] | ['d', 1] | ['d', 1, 'e']
 * type T1 = tt.Object.GetKeyPaths<{ a: { b: 1 }, d: [1, { e: 1 }] }, { mode: 'string' }> // 'a' | 'a.b' | 'd' | 'd[0]' | 'd[1]' | 'd[1].e'
 * ```
 */
type Preview232142 = 1;
