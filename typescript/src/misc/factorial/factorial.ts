const validate = (n: number) => {
  if (n < 1) {
    throw new Error(`${n} is not a valid factorial to calculate.`);
  }
};

export const factorialRecursive = (n: number): number => {
  validate(n);

  if (n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
};

export const factorialIterative = (n: number): number => {
  validate(n);

  const results: Record<number, number> = {
    1: 1,
  };

  for (let i = 2; i <= n; i += 1) {
    results[i] = i * results[i - 1];
  }

  return results[n];
};

const memoized: Record<number, number> = {
  1: 1,
};

export const factorialRecursiveMemoized = (n: number): number => {
  validate(n);

  if (memoized[n]) {
    return memoized[n];
  }

  const result = n * factorialRecursiveMemoized(n - 1);
  memoized[n] = result;
  return result;
};
