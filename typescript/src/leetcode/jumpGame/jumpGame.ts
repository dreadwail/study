export const canJump = (nums: number[]): boolean => {
  const endIndex = nums.length - 1;

  let currentIndex = 0;

  while (currentIndex < nums.length) {
    const maxJumpDistanceFromHere = nums[currentIndex];
    if (maxJumpDistanceFromHere === 0) {
      break;
    }

    const maxIndexFromHere = currentIndex + maxJumpDistanceFromHere;
    if (maxIndexFromHere >= endIndex) {
      return true;
    }

    let bestIndexToJumpTo = maxIndexFromHere;
    let maxReachableIndex = bestIndexToJumpTo + nums[bestIndexToJumpTo];

    for (let indexToCheck = maxIndexFromHere; indexToCheck > currentIndex; indexToCheck -= 1) {
      const distanceHere = nums[indexToCheck];
      const maxReachableIndexHere = indexToCheck + distanceHere;

      if (maxReachableIndexHere > maxReachableIndex) {
        maxReachableIndex = maxReachableIndexHere;
        bestIndexToJumpTo = indexToCheck;
      }
    }

    if (bestIndexToJumpTo === currentIndex) {
      break;
    }
    currentIndex = bestIndexToJumpTo;
  }
  return currentIndex >= endIndex;
};
