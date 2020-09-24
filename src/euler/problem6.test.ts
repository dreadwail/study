import { sumSquareDifference } from './problem6';

describe('sumSquareDifference', () => {
  it.each([
    [2640, 10],
    [25164150, 100],
  ])('returns %i for a max of %i', (expected, max) => {
    expect(sumSquareDifference(max)).toEqual(expected);
  });
});
