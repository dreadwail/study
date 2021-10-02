import { plusOne } from './plusOne';

describe('plusOne', () => {
  it.each([
    [
      [1, 2, 4],
      [1, 2, 3],
    ],
    [
      [4, 3, 2, 2],
      [4, 3, 2, 1],
    ],
    [[1], [0]],
    [[1, 0], [9]],
  ])('returns %p when given %p', (expectedOutput, input) => {
    expect(plusOne(input)).toEqual(expectedOutput);
  });
});
