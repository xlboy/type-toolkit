/**
 * $$target-slot: GetWritableKeys
 *
 * Gets the key in the object that has write permission.
 *
 * @param O (**object**): The object to get the writable keys from
 *
 * @returns (**string/never**): The key in the object that has write permission. If there is no writable key, return `never` 
 * 
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.Object.GetWritableKeys<{ a: 1 }> // 'a'
 * type T2 = tt.Object.GetWritableKeys<{ a: 1, b: 2, readonly c: 3 }> // 'a' | 'b'
 * type T3 = tt.Object.GetWritableKeys<{ readonly a: 1, readonly b: 2, readonly c: 3 }> // never
 * ```
 */
type Preview93 = 1;
