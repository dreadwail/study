import { climbStairs } from './climbingStairs';

describe('climbStairs', () => {
  it.each([
    [2, 2],
    [3, 3],
    [5, 4],
    [8, 5],
    [13, 6],
    [89, 10],
    [233, 12],
    [987, 15],
    [1597, 16],
    [2584, 17],
    [4181, 18],
    [6765, 19],
    [10946, 20],
    [17711, 21],
    [28657, 22],
    [46368, 23],
    [75025, 24],
    [196418, 26],
    [514229, 28],
    [1346269, 30],
    [1836311903, 45],
  ])('return %i for %i stairs', (expected, input) => {
    expect(climbStairs(input)).toEqual(expected);
  });
});
