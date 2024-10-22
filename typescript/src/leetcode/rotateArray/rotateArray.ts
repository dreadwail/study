const wrap = (rawIndex: number, length: number) => Math.abs(rawIndex % length);

export const rotate = (nums: number[], rawRotateCount: number): void => {
  const rotateCount = wrap(rawRotateCount, nums.length);
  const partitionIndex = wrap(nums.length - rotateCount, nums.length);

  const endChunk = nums.slice(partitionIndex, nums.length);

  for (let index = nums.length - 1; index >= rotateCount; index -= 1) {
    nums[index] = nums[index - rotateCount];
  }

  for (let index = 0; index < endChunk.length; index += 1) {
    nums[index] = endChunk[index];
  }
};
