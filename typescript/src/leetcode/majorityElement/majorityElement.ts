export const findMajorityElement = (nums: number[]): number | undefined => {
  const numToCount: Record<number, number> = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    numToCount[num] = numToCount[num] || 0;
    numToCount[num] += 1;

    if (numToCount[num] > nums.length / 2) {
      return num;
    }
  }

  return undefined;
};
