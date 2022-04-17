import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it.each([
    [true, 'A man, a plan, a canal: Panama'],
    [false, 'race a car'],
    [true, ' '],
  ])('returns %s for input "%s"', (expected, input) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
