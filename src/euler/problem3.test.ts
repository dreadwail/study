import { largestPrimeFactor } from './problem3';

describe('largestPrimeFactor', () => {
  it.each([
    [13195, 29],
    [600851475143, 6857],
  ])('returns the correct result for input=%i', (input, expected) => {
    expect(largestPrimeFactor(input)).toEqual(expected);
  });
});
