import { findRedundantConnection } from './redundantGraphConnection';

describe('findRedundantConnection', () => {
  it.each<[[number, number], [number, number][]]>([
    [
      [2, 3],
      [
        [1, 2],
        [1, 3],
        [2, 3],
      ],
    ],
    [
      [1, 4],
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
      ],
    ],
    [
      [4, 10],
      [
        [9, 10],
        [5, 8],
        [2, 6],
        [1, 5],
        [3, 8],
        [4, 9],
        [8, 10],
        [4, 10],
        [6, 8],
        [7, 9],
      ],
    ],
  ])('returns edge %j for input graph %j', (expectedRemovedEdge, inputEdges) => {
    expect(findRedundantConnection(inputEdges)).toEqual(expectedRemovedEdge);
  });
});
