import type { Equal, Checker } from '../../utils.tzen';
import type { RenameByValue } from './index.tzen';

type _ = Checker<
  [
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
