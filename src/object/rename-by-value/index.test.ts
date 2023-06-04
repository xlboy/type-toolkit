import type { Equal, Checker } from '../../utils.tzen';
import type { _GetTargetKeys, RenameByValue } from './index.tzen';

type _ = Checker<
  [
    //#region  //*=========== GetTargetKeys ===========
    Equal<_GetTargetKeys<{ a: 1; b: '' }, 'a', '->'>, never>,
    Equal<_GetTargetKeys<{ a: 1; b: '' }, '', '->'>, 'b'>,
    Equal<_GetTargetKeys<{ a: 1; b: '' }, string, '<-'>, 'b'>,

    Equal<_GetTargetKeys<{ a: 1; b: '' }, 1, '->'>, 'a'>,
    Equal<_GetTargetKeys<{ a: 1; b: '' }, number, '->'>, never>,
    Equal<_GetTargetKeys<{ a: 1; b: '' }, number, '<-'>, 'a'>,

    Equal<_GetTargetKeys<{ a: []; b: '' }, any[], '<-'>, 'a'>,
    Equal<_GetTargetKeys<{ a: []; b: '' }, any[], '->'>, never>,
    Equal<_GetTargetKeys<{ a: []; b: '' }, any[], '==='>, never>,
    Equal<_GetTargetKeys<{ a: []; b: '' }, [], '==='>, 'a'>,
    //#endregion  //*======== GetTargetKeys ===========

    //#region  //*=========== RenameByValue ===========
    Equal<RenameByValue<{ a: 1; b: '' }, 1, 'c'>, { c: 1; b: '' }>,
    Equal<
      RenameByValue<
        { a: 1; d: { value: 3 } },
        number,
        'c',
        { deep: true; matchType: '<-' }
      >,
      { c: 1; d: { c: 3 } }
    >,
    Equal<
      RenameByValue<
        { a: 1; d: { value: 3; jjj: {} } },
        object,
        'c',
        { deep: true; matchType: '<-' }
      >,
      { a: 1; c: { value: 3; c: {} } }
    >

    //#endregion  //*======== RenameByValue ===========
  ]
>;
