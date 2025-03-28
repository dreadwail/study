import { findTheDifference } from './findTheDifference';

describe('findTheDifference', () => {
  it.each([
    ['e', 'abcd', 'abcde'],
    ['y', '', 'y'],
    ['a', 'a', 'aa'],
  ])('returns %p when given %p and %p', (expected, original, shuffled) => {
    const result = findTheDifference(original, shuffled);
    expect(result).toEqual(expected);
  });
});
