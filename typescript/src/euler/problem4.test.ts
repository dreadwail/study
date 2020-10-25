import { largestPalindromeProduct } from './problem4';

describe('largestPalindromeProduct', () => {
  it.each([
    [9009, 2],
    [906609, 3],
  ])('returns %s for %s digits', (expected, digits) => {
    expect(largestPalindromeProduct(digits)).toEqual(expected);
  });
});
