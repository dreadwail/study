import { longestCommonPrefix } from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  it.each([
    ['fl', ['flower', 'flow', 'flight']],
    ['', ['dog', 'racecar', 'car']],
  ])('returns %s when given %j', (expected, input) => {
    expect(longestCommonPrefix(input)).toEqual(expected);
  });
});
