export const canPartition = (nums: number[]): boolean => {
  if (nums.length <= 1) {
    return false;
  }

  const totalSum = nums.reduce((memo, current) => memo + current);
  if (totalSum % 2 !== 0) {
    return false;
  }

  const desiredSum = totalSum / 2;

  const cache: Record<number, boolean> = {
    0: true,
  };

  for (let index = 0; index < nums.length; index += 1) {
    const numHere = nums[index];

    for (let sum = desiredSum; sum > 0; sum -= 1) {
      if (!cache[sum]) {
        const sumNeededIfPicked = sum - numHere;
        cache[sum] = cache[sumNeededIfPicked];
      }
    }
  }

  return !!cache[desiredSum];
};
