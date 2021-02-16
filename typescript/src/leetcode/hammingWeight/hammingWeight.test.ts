import { hammingWeight } from './hammingWeight';

describe('hammingWeight', () => {
  it.each([
    [3, 11],
    [1, 8],
    [2, 9],
    [1, 128],
    [31, 4294967293],
  ])('returns %i for %i', (expected, input) => {
    expect(hammingWeight(input)).toEqual(expected);
  });
});
