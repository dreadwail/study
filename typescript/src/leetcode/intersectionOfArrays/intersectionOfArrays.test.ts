import { intersectionOfArrays } from './intersectionOfArrays';

describe('intersectionOfArrays', () => {
  it.each([
    [
      [2, 2],
      [
        [1, 2, 2, 1],
        [2, 2],
      ],
    ],
    [
      [4, 9],
      [
        [4, 9, 5],
        [9, 4, 9, 8, 4],
      ],
    ],
  ])('should return %j when given %j and %j', (expected, [input1, input2]) => {
    expect(intersectionOfArrays(input1, input2)).toEqual(expected);
  });
});
