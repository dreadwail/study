import { titleToNumber } from './excelSheetColumnNumber';

describe('titleToNumber', () => {
  it.each([
    [1, 'A'],
    [28, 'AB'],
    [701, 'ZY'],
  ])('returns %i for %s', (expected, input) => {
    expect(titleToNumber(input)).toEqual(expected);
  });
});
