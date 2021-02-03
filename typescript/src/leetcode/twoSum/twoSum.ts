const isAnswer = (nums: number[], target: number, index1: number, index2: number): boolean => {
  const num1 = nums[index1];
  const num2 = nums[index2];
  return num1 + num2 === target;
};

export const twoSumBruteForce = (nums: number[], target: number): number[] => {
  for (let index1 = 0; index1 < nums.length; index1 += 1) {
    for (let index2 = 0; index2 < nums.length; index2 += 1) {
      if (index1 === index2) {
        continue;
      }
      if (isAnswer(nums, target, index1, index2)) {
        return [index1, index2];
      }
    }
  }

  return [];
};

export const twoSum = (nums: number[], target: number): number[] => {
  const numsToIndices = nums.reduce<Record<number, number>>(
    (mapping, num, index) => ({ ...mapping, [num]: index }),
    {}
  );

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const needed = target - num;
    const neededIndex = numsToIndices[needed];
    if (i === neededIndex) {
      continue;
    }
    if (neededIndex !== undefined) {
      return [i, neededIndex];
    }
  }

  return [];
};
