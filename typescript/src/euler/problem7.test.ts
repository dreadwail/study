import { nthPrime } from './problem7';

describe('nthPrime', () => {
  it.each([
    [13, 6],
    [104743, 10001],
  ])('returns %i for the prime at position %i', (expected, primeIndex) => {
    expect(nthPrime(primeIndex)).toEqual(expected);
  });
});
