import type { Equal, Checker } from '../../utils.tzen';
import type { SplitWords } from './index.tzen';

type _ = Checker<
  [
    Equal<SplitWords<'fred, barney, & pebbles'>, ['fred', 'barney', 'pebbles']>,
    Equal<
      SplitWords<'fred, barney, & pebbles, &betty'>,
      ['fred', 'barney', 'pebbles', 'betty']
    >,
    Equal<SplitWords<'helloWORLD, hi, 111'>, ['hello', 'WORLD', 'hi', '111']>,
    Equal<
      SplitWords<`Note: This method doesn't set the "length" property of bound functions.`>,
      [
        'Note',
        'This',
        'method',
        'doesn',
        't',
        'set',
        'the',
        'length',
        'property',
        'of',
        'bound',
        'functions'
      ]
    >
  ]
>;
