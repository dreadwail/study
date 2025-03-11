import { intersect } from './intersectionOfArrays2';

describe('intersect', () => {
  it.each([
    [
      [2, 2],
      [1, 2, 2, 1],
      [2, 2],
    ],
    [[2], [1, 2, 2, 1], [2]],
    [
      [4, 9],
      [4, 9, 5],
      [9, 4, 9, 8, 4],
    ],
    [[1], [2, 1], [1, 1]],
  ])('should return %p when given %p and %p', (expected, input1, input2) => {
    expect(intersect(input1, input2)).toEqual(expected);
  });
});
