import type { Checker, Equal } from '../../utils.tzen';
import type { Rename, _HasKey } from './index.tzen';

type _ = Checker<
  [
    //#region  //*=========== HasKey ===========
    Equal<_HasKey<{ a: 1; b: 1 }, 'a', true>, true>,
    Equal<_HasKey<{ a: 1; c: 1 }, 'a', false>, true>,
    Equal<_HasKey<{ a: 1 }, string, true>, false>,
    Equal<_HasKey<{ a: 1 }, string, false>, true>,
    Equal<_HasKey<{ a: 1 }, number, false>, false>,

    Equal<_HasKey<{ 1: 1 }, string, false>, false>,
    Equal<_HasKey<{ 1: 1 }, number, false>, true>,
    Equal<_HasKey<{ 1: 1 }, number, true>, false>,
    Equal<_HasKey<{ 1: 1 }, 1, true>, true>,
    //#endregion  //*======== HasKey ===========

    //#region  //*=========== Rename ===========
    Equal<Rename<{ a: 1; c: 2 }, 'a', 'b'>, { b: 1; c: 2 }>,

    Equal<Rename<{ a: 1; c: 2 }, string, 'b'>, { b: 1 | 2 }>,
    Equal<Rename<{ a: 1; [0]: 2 }, number, 'b'>, { a: 1; b: 2 }>,
    Equal<Rename<{ a: 1; c: 2 }, string, 'b', { strict: true }>, { a: 1; c: 2 }>,
    Equal<Rename<{ a: 1; [0]: 2 }, number, 'b', { strict: true }>, { a: 1; [0]: 2 }>,

    Equal<
      Rename<{ a: 1; c: 2 }, 'a', string>,
      {
        [x: string]: 1;
        // @ts-ignore
        c: 2;
      }
    >,
    Equal<
      Rename<{ a: 1; b: 2; c: { a: 3 } }, 'a', '-a-', { deep: true }>,
      {
        '-a-': 1;
        b: 2;
        c: {
          '-a-': 3;
        };
      }
    >

    //#endregion  //*======== Rename ===========
  ]
>;
