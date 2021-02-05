export const missingNumber = (nums: number[]): number => {
  const set = new Set(nums);

  for (let i = 0; i < nums.length + 1; i += 1) {
    if (!set.has(i)) {
      return i;
    }
  }

  return -1;
};
