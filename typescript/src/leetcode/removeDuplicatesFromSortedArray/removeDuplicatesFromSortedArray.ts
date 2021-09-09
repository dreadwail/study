export const removeDuplicates = (nums: number[]): number => {
  let pointer = 0;
  let lastNum = null;
  let removedCount = 0;

  const removeInPlace = (indexToRemove: number): void => {
    for (let index = indexToRemove; index < nums.length - 1; index += 1) {
      nums[index] = nums[index + 1];
    }
    delete nums[nums.length - 1];
  };

  while (pointer < nums.length) {
    const numHere = nums[pointer];

    const haveReachedEnd = numHere === undefined;
    const needsRemoval = numHere === lastNum;

    if (haveReachedEnd) {
      break;
    } else if (needsRemoval) {
      removeInPlace(pointer);
      removedCount += 1;
    } else {
      pointer += 1;
    }
    lastNum = numHere;
  }

  return nums.length - removedCount;
};
