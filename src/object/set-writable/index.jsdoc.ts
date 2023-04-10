/**
 * $$target-slot: SetWritable
 *
 * Set the writable property of the object.
 *
 * @param O (**object**): The object to set the writable property
 * @param Keys (**keypf O, default: `keyof O`**): The keys to set the writable property
 *
 * @returns (**object**): The object with the writable property set
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T1 = tt.O.SetWritable<{ a: 1, b: 2, readonly c: 3 }, 'c'> // { a: 1, b: 2, c: 3 }
 * ```
 */
type Preview53 = 1;
