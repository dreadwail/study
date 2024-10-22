import { rotate } from './rotateArray';

describe('rotate', () => {
  it('rotates example 1 correctly', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);

    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('rotates example 2 correctly', () => {
    const nums = [-1, -100, 3, 99];
    rotate(nums, 2);

    expect(nums).toEqual([3, 99, -1, -100]);
  });

  it('can rotate an array that is smaller than the rotation count', () => {
    const nums = [1, 2];
    rotate(nums, 3);

    expect(nums).toEqual([2, 1]);
  });

  it('can rotate by 1', () => {
    const nums = [1, 2, 3, 4, 5, 6];
    rotate(nums, 1);

    expect(nums).toEqual([6, 1, 2, 3, 4, 5]);
  });
});
