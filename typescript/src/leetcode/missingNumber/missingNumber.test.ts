import { missingNumber } from './missingNumber';

describe('missingNumber', () => {
  it.each([
    [2, [3, 0, 1]],
    [2, [0, 1]],
    [8, [9, 6, 4, 2, 3, 5, 7, 0, 1]],
    [1, [0]],
  ])('returns %i for %j', (expected, input) => {
    expect(missingNumber(input)).toEqual(expected);
  });
});
