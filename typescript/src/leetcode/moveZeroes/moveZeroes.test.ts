import { moveZeroes } from './moveZeroes';

describe('moveZeroes', () => {
  it('correctly moves zeroes in the sample data', () => {
    const nums: number[] = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });
});
