import { merge } from './mergeSortedArray';

describe('merge', () => {
  it.each([
    [[1, 2, 2, 3, 5, 6], [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
    [[1], [1], 1, [], 0],
    [[1], [0], 0, [1], 1],
  ])('modifies the first input array to be %p for inputs (%p, %i, %p %i)', (expectedArray, nums1, m, nums2, n) => {
    const nums1ToModify = [...nums1];
    merge(nums1ToModify, m, nums2, n);
    expect(nums1ToModify).toEqual(expectedArray);
  });
});
