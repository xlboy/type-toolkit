import { Simplify } from './index.tzen';

type Preview1 = Simplify<{ a: 1; b: 2 } & { c: 3 }>;
type Preview2 = Simplify<
  { a: 1; b: 2 } & {
    c: {
      a: 1;
    } & {
      b: 2;
    } & {
      readonly c: 3;
    };
  }
>;
