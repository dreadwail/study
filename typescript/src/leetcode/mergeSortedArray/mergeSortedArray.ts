export const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  let nums1ptr = 0;
  let nums2ptr = 0;

  while (nums1ptr < m + n) {
    const nums1num = nums1[nums1ptr];
    const nums2num = nums2[nums2ptr];

    const nums1end = m + nums2ptr;
    const doneWithNums1 = nums1ptr >= nums1end;

    if (doneWithNums1 || nums1num > nums2num) {
      nums1.splice(nums1ptr, 0, nums2num);
      nums1.length = m + n;

      nums1ptr += 1;
      nums2ptr += 1;
    } else {
      nums1ptr += 1;
    }
  }
};
