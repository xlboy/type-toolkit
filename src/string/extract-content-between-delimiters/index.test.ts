import type { Equal, Checker } from '../../utils.tzen';
import type { ExtractContentBetweenDelimiters } from './index.tzen';

type _ = Checker<
  [
    Equal<ExtractContentBetweenDelimiters<'__[123]?.[gg]...', '[', ']'>, ['123', 'gg']>,
    Equal<ExtractContentBetweenDelimiters<'[123][gg]', '[', ']'>, ['123', 'gg']>,
    Equal<ExtractContentBetweenDelimiters<'{123,... }', '{', '}'>, ['123,... ']>,
    Equal<
      ExtractContentBetweenDelimiters<'/api/getUserInfo?#{id},#{name}', '#{', '}'>,
      ['id', 'name']
    >,
    Equal<ExtractContentBetweenDelimiters<'api/getUserInfo', '#{', '}'>, []>
  ]
>;
