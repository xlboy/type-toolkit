import { Equal, Checker } from '../../utils.tzen';
import { IsEmpty } from './index.tzen';

type _ = Checker<
  [
    Equal<IsEmpty<{}>, true>,
    Equal<IsEmpty<{ a: 1 }>, false>,
    Equal<IsEmpty<{ a?: 1 }>, false>,
    Equal<IsEmpty<1>, false>,
    Equal<IsEmpty<''>, false>,
    Equal<IsEmpty<null>, false>,
    Equal<IsEmpty<undefined>, false>,
    Equal<IsEmpty<never>, false>
  ]
>;
