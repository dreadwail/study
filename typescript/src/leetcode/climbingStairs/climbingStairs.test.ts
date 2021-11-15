import { climbStairs } from './climbingStairs';

describe('climbStairs', () => {
  it.each([
    [2, 2],
    [3, 3],
    [5, 4],
    [8, 5],
    [13, 6],
    [89, 10],
  ])('return %i for %i stairs', (expected, input) => {
    expect(climbStairs(input)).toEqual(expected);
  });
});
