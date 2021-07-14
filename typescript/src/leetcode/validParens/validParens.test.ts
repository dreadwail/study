import { isValid } from './validParens';

describe('isValid', () => {
  it.each([
    [true, '()'],
    [true, '()[]{}'],
    [false, '(]'],
    [false, '([)]'],
    [true, '{[]}'],
    [false, '['],
    [false, '(){}}{'],
  ])('returns %s for %s', (expected, input) => {
    expect(isValid(input)).toEqual(expected);
  });
});
