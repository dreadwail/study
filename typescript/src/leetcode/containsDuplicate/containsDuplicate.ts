export const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
};
