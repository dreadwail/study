import { sumPrimes } from './problem10';

describe('sumPrimes', () => {
  it.each([
    [17, 10],
    [1060, 100],
    [8275, 300],
    [454396537, 100000],
    [142913828922, 2000000],
  ])('returns %i for primes through %i', (expected, upTo) => {
    expect(sumPrimes(upTo)).toEqual(expected);
  });
});
