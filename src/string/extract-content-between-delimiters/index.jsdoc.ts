/**
 * $$target-slot: ExtractContentBetweenDelimiters
 *
 * Extract the text content between two delimiters.
 *
 * @param Str (**string**): The string to extract.
 * @param LeftDelimiter (**string**): The left delimiter.
 * @param RightDelimiter (**string**): The right delimiter.
 *
 * @returns (**string[]**): Returns the text content between two delimiters.
 *
 * @example
 * ```ts
 * import type tt from 'type-toolkit'
 *
 * type T0 = tt.String.ExtractContentBetweenDelimiters<'__[123]?.[gg]...', '[', ']'> // ['123', 'gg']
 * type T1 = tt.String.ExtractContentBetweenDelimiters<'[123][gg]', '[', ']'> // ['123', 'gg']
 * type T2 = tt.String.ExtractContentBetweenDelimiters<'{123,... }', '{', '}'> // ['123,... ']
 * type T3 = tt.String.ExtractContentBetweenDelimiters<'/api/getUserInfo?#{id},#{name}', '#{', '}'> // ['id', 'name']
 * ```
 */
type Preview61224 = 1;
