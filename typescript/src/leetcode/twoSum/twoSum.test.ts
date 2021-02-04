import { twoSum, twoSumBruteForce } from './twoSum';

describe.each([twoSum, twoSumBruteForce])('twoSum', (func) => {
  it.each([
    [[0, 1], [2, 7, 11, 15], 9],
    [[1, 2], [3, 2, 4], 6],
    [[0, 1], [3, 3], 6],
  ])('it returns %j for %j with target %i', (expected, input, target) => {
    expect(func(input, target)).toEqual(expected);
  });
});
