import { numberToWords } from './integerToEnglishWords';

describe('numberToWords', () => {
  it.each([
    ['Zero', 0],
    ['One', 1],
    ['One Hundred Twenty Three', 123],
    ['Twelve Thousand Three Hundred Forty Five', 12345],
    ['One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven', 1234567],
  ])('returns %p when given %p', (expected, input) => {
    const result = numberToWords(input);
    expect(result).toEqual(expected);
  });
});
