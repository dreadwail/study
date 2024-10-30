export const removeDuplicates = (nums: (number | null)[]): number => {
  if (nums.length < 3) {
    return nums.length;
  }

  let currentIndex = 2;
  let numberStartIndex = 3;

  let numberCount = nums.length;

  while (currentIndex < nums.length) {
    if (nums[currentIndex] === nums[currentIndex - 1] && nums[currentIndex - 1] === nums[currentIndex - 2]) {
      nums[currentIndex] = null;
      numberStartIndex = currentIndex + 1;
      numberCount -= 1;
    } else if (nums[currentIndex] === null) {
      while (nums[numberStartIndex] === null) {
        numberStartIndex += 1;
      }

      nums[currentIndex] = nums[numberStartIndex];
      nums[numberStartIndex] = null;
      numberStartIndex += 1;
    } else {
      currentIndex += 1;
    }

    if (numberStartIndex > nums.length - 1) {
      break;
    }
  }

  if (nums[currentIndex] === nums[currentIndex - 1] && nums[currentIndex - 1] === nums[currentIndex - 2]) {
    nums[currentIndex] = null;
    numberCount -= 1;
  }

  return numberCount;
};
