import { formLargestNumber } from './formLargestNumber';

describe('formLargestNumber', () => {
  it.each([
    [210, [2, 10]],
    [343, [3, 34]],
    [332, [3, 32]],
    [9210, [2, 10, 9]],
  ])('should return %i for %j', (expected, input) => {
    expect(formLargestNumber(input)).toEqual(expected);
  });
});
