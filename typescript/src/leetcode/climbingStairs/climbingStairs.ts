const cache: Record<number, number> = {};

export const climbStairs = (stepCount: number): number => {
  if (stepCount <= 3) {
    return stepCount;
  }

  const cachedValue = cache[stepCount];
  if (cachedValue !== undefined) {
    return cachedValue;
  }

  const oneAgoStepCount = climbStairs(stepCount - 1);
  const twoAgoStepCount = climbStairs(stepCount - 2);

  const waysCount = oneAgoStepCount + twoAgoStepCount;
  cache[stepCount] = waysCount;
  return waysCount;
};
