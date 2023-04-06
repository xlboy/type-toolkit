import { Checker, Equal } from '../../utils.tzen';
import { SetWritable } from './index.tzen';

type _ = Checker<
  [
    Equal<SetWritable<{ readonly a: number; b: string }, 'a'>, { a: number; b: string }>,
    Equal<
      SetWritable<{ readonly a: number; b: string }, 'a' | 'b'>,
      { a: number; b: string }
    >,
    Equal<
      // @ts-ignore
      SetWritable<{ readonly a: number; b: string }, 'a' | 'b' | 'c'>,
      { a: number; b: string; c: unknown }
    >
  ]
>;
