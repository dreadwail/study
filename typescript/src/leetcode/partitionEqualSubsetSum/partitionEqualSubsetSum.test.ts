import { canPartition } from './partitionEqualSubsetSum';

describe('canPartition', () => {
  it.each([
    [true, [1, 5, 11, 5]],
    [false, [1, 2, 3, 5]],
  ])('returns %p for input %p', (expected, input) => {
    expect(canPartition(input)).toEqual(expected);
  });
});
