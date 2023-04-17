/**
 * $$target-slot: Append
 *
 * Add the specified element to the end of the array
 *
 * @param Arr (**Array<any>**): The array to be added to
 * @param Element The element to be added
 *
 * @returns (**Array<any>**): The array after adding the element
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.A.Append<[], 1> // [1]
 * type T1 = tt.A.Append<[1], string> // [1, string]
 * type T2 = tt.A.Append<string[], { a: 1 }> // [...string[], { a: 1 }]
 * ```
 */
type Preview195204 = 1;

