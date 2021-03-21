import { climbStairs } from './climbStairs';

describe('climbStairs', () => {
  it.each([
    [2, 2],
    [3, 3],
    [5, 4],
  ])('returns %i for %i', (expected, input) => {
    expect(climbStairs(input)).toEqual(expected);
  });
});
