import type { Equal, Checker } from '../../utils.tzen';
import type { GetKeysByValue } from './index.tzen';

type _ = Checker<
  [
    Equal<GetKeysByValue<{ a: 1; b: '' }, 'a', { matchType: '->' }>, never>,
    Equal<GetKeysByValue<{ a: 1; b: '' }, '', { matchType: '->' }>, 'b'>,
    Equal<GetKeysByValue<{ a: 1; b: '' }, string, { matchType: '<-' }>, 'b'>,

    Equal<GetKeysByValue<{ a: 1; b: '' }, 1, { matchType: '->' }>, 'a'>,
    Equal<GetKeysByValue<{ a: 1; b: '' }, number, { matchType: '->' }>, never>,
    Equal<GetKeysByValue<{ a: 1; b: '' }, number, { matchType: '<-' }>, 'a'>,

    Equal<GetKeysByValue<{ a: []; b: '' }, any[], { matchType: '<-' }>, 'a'>,
    Equal<GetKeysByValue<{ a: []; b: '' }, any[], { matchType: '->' }>, never>,
    Equal<GetKeysByValue<{ a: []; b: '' }, any[], { matchType: '===' }>, never>,
    Equal<GetKeysByValue<{ a: []; b: '' }, [], { matchType: '===' }>, 'a'>
  ]
>;
