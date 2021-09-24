// O(n)
export const maxSubArray = (nums: number[]): number =>
  nums.reduce(
    ({ currentSum, biggestSum }, num, index) => {
      if (index === 0) {
        return { currentSum, biggestSum };
      }
      const newCurrentSum = Math.max(currentSum, 0) + num;
      return {
        currentSum: newCurrentSum,
        biggestSum: Math.max(biggestSum, newCurrentSum),
      };
    },
    {
      currentSum: nums[0],
      biggestSum: nums[0],
    }
  ).biggestSum;

type SumArraySliceOptions = {
  readonly startIndex: number;
  readonly endIndex: number;
};

const sumArray = (nums: number[], options?: SumArraySliceOptions): number => {
  const { startIndex = 0, endIndex = nums.length - 1 } = options ?? {};
  const slice = nums.slice(startIndex, endIndex + 1);
  return slice.reduce((sum, num) => sum + num, 0);
};

// O(n^3) brute force
export const maxSubArrayBruteForce = (nums: number[]): number => {
  let greatestSum = sumArray(nums);

  for (let startIndex = 0; startIndex < nums.length; startIndex += 1) {
    for (let endIndex = startIndex; endIndex < nums.length; endIndex += 1) {
      const candidateSlice = nums.slice(startIndex, endIndex + 1);
      const candidateSum = sumArray(candidateSlice);
      greatestSum = Math.max(greatestSum, candidateSum);
    }
  }

  return greatestSum;
};
