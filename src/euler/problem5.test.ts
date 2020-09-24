import { smallestMultiple } from './problem5';

describe('smallestMultiple', () => {
  it.each([
    [2520, 10],
    [232792560, 20],
  ])('returns %i for %p', (expected, maxFactor) => {
    expect(smallestMultiple(maxFactor)).toEqual(expected);
  });
});
