export const moveZeroes = (nums: number[]): void => {
  let zeroHole = 0;

  for (let explorer = 0; explorer < nums.length; explorer += 1) {
    if (nums[explorer] === 0) {
      continue;
    }
    const temp: number = nums[explorer];
    nums[explorer] = nums[zeroHole];
    nums[zeroHole] = temp;
    zeroHole += 1;
  }
};
