import { canJump } from './jumpGame';

describe('canJump', () => {
  it.each([
    [true, [2, 3, 1, 1, 4]],
    [false, [3, 2, 1, 0, 4]],
    [true, [0]],
    [true, [2, 0]],
    [true, [2, 0, 0]],
    [true, [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]],
    [true, [4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0]],
  ])('returns %p when input is %p', (expected, input) => {
    const result = canJump(input);
    expect(result).toEqual(expected);
  });
});
