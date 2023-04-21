/**
 * $$target-slot: GetProperty
 *
 * Get the value of the property by key path, similar to [get](https://lodash.com/docs/4.17.15#get) in lodash
 *
 * @param O (**object**): The object to query.
 * @param KeyPath (**GetKeyPaths<O, { mode: 'string' }>**): The key path of the property to get.
 *
 * @returns The resolved value.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Object.GetProperty<{ a: { b: { c: 'ah' } } }, 'a.b.c'> // 'ah'
 * type T1 = tt.Object.GetProperty<{ b: [1, { d: 2 }] }, 'b[0]'> // 1
 * type T2 = tt.Object.GetProperty<{ b: [1, { d: 2 }] }, 'b[1].d'> // 2
 * ```
 */
type Preview41110 = 1;
