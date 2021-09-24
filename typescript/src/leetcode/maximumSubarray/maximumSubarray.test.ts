import { maxSubArray, maxSubArrayBruteForce } from './maximumSubarray';

const variants: Record<string, (nums: number[]) => number> = {
  maxSubArray,
  maxSubArrayBruteForce,
};

describe.each(Object.keys(variants))('%s', (variantName) => {
  it.each([
    [6, [-2, 1, -3, 4, -1, 2, 1, -5, 4]],
    [1, [1]],
    [23, [5, 4, -1, 7, 8]],
    [-1, [-1]],
    [1, [-2, 1]],
    [-1, [-2, -1]],
    [21, [8, -19, 5, -4, 20]],
    [-1, [-1, -2]],
    [0, [-1, 0, -2]],
    [2, [0, -3, 1, 1]],
    [1, [1, -2, 0]],
    [6, [1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]],
  ])('returns %i from array %j', (expectedSum, input) => {
    const func = variants[variantName];
    expect(func(input)).toEqual(expectedSum);
  });
});
