import type { Equal, Checker } from '../../utils.tzen';
import type { OmitDeep } from './index.tzen';

type _ = Checker<
  [
    Equal<OmitDeep<{ b: { e: 1 } }, 'e'>, { b: {} }>,
    Equal<OmitDeep<{ b: { e: 1 } }, string>, {}>,
    Equal<OmitDeep<{ b: { 0: 1 } }, number>, { b: {} }>,
    Equal<
      OmitDeep<
        {
          a: 1;
          b: { c: { a: { b: '1' } } };
        },
        'a'
      >,
      { b: { c: {} } }
    >
  ]
>;
