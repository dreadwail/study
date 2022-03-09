import { findLongestPathLength } from './longestPathToBottom';

describe('findLongestPathLength', () => {
  it.each([
    [
      3,
      [
        ['0', '#'],
        ['0', '0'],
      ],
    ],
    [
      7,
      [
        ['#', '0', '#', '0'],
        ['#', '0', '#', '0'],
        ['#', '0', '#', '0'],
        ['0', '0', '0', '0'],
      ],
    ],
    [
      9,
      [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0'],
      ],
    ],
  ])('returns %i for grid %j', (expectedLength, grid) => {
    expect(findLongestPathLength(grid)).toEqual(expectedLength);
  });
});
