import { romanToInt } from './romanToInt';

describe('romanToInt', () => {
  it.each([
    [3, 'III'],
    [4, 'IV'],
    [9, 'IX'],
    [58, 'LVIII'],
    [1994, 'MCMXCIV'],
  ])('returns %i for %s', (expected, input) => {
    expect(romanToInt(input)).toEqual(expected);
  });
});
