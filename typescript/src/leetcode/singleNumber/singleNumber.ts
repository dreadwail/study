export const singleNumber = (nums: number[]): number => {
  const seen = new Set<number>();
  const seenOnce = new Set<number>();

  for (let i = 0; i <= nums.length; i += 1) {
    const num = nums[i];

    if (seenOnce.has(num)) {
      seenOnce.delete(num);
    } else if (!seen.has(num)) {
      seenOnce.add(num);
    }

    seen.add(num);
  }

  return [...seenOnce][0];
};
