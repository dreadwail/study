export const removeElement = (nums: number[], toRemove: number): number => {
  if (nums.length === 0) {
    return 0;
  }

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  const swap = (index1: number, index2: number) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };

  while (leftIndex <= rightIndex) {
    const valueHere = nums[leftIndex];
    if (valueHere === toRemove) {
      swap(leftIndex, rightIndex);
      rightIndex -= 1;
    } else {
      leftIndex += 1;
    }
  }

  return leftIndex;
};
