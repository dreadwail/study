import { minPathSum } from './minimumPathSum';

describe('minPathSum', () => {
  it.each([
    [
      7,
      [
        [1, 3],
        [1, 5],
      ],
    ],
    [
      7,
      [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
    ],
    [
      12,
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
    ],
  ])('returns %i given grid %j', (expected, grid) => {
    expect(minPathSum(grid)).toEqual(expected);
  });
});
