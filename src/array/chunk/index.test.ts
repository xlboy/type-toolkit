import type { Equal, Checker } from '../../utils.tzen';
import type { Chunk } from './index.tzen';

type _ = Checker<
  [
    Equal<Chunk<[], 1>, []>,
    Equal<Chunk<[1, 2, 3, 4], 1>, [[1], [2], [3], [4]]>,
    Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>,
    Equal<Chunk<[1, 2, 3, 4], 3>, [[1, 2, 3], [4]]>,
    Equal<Chunk<[1, 2, 3, 4], 4>, [[1, 2, 3, 4]]>,
    Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>
  ]
>;
