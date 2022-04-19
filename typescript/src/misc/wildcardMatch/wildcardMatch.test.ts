import { isMatch } from './wildcardMatch';

describe('isMatch', () => {
  it.each([
    [true, 'cat', 'c*t'],
    [true, 'cat', '*t'],
    [false, 'dog', 'c*t'],
    [false, 'cat', 'tac*'],
  ])('returns %s for input "%s" with pattern "%s"', (expected, input, pattern) => {
    expect(isMatch(input, pattern)).toBe(expected);
  });
});
