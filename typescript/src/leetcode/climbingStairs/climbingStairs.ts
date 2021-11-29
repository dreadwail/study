const cache: Record<number, number> = {};

export const climbStairs = (stepCountRemaining: number): number => {
  const cached = cache[stepCountRemaining];
  if (cached !== undefined) {
    return cached;
  }

  if (stepCountRemaining <= 2) {
    cache[stepCountRemaining] = stepCountRemaining;
    return stepCountRemaining;
  }

  const result = climbStairs(stepCountRemaining - 1) + climbStairs(stepCountRemaining - 2);
  cache[stepCountRemaining] = result;
  return result;
};
