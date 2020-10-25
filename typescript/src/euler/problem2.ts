const fibCache: { [key: number]: number } = {
  0: 1,
  1: 1,
};

const fibAt = (index: number): number => {
  if (index === 0 || index === 1) {
    return 1;
  }
  if (fibCache[index]) {
    return fibCache[index];
  }
  const computed = fibAt(index - 1) + fibAt(index - 2);
  fibCache[index] = computed;
  return computed;
};

const generateFibs = (maxFib: number, predicate: (candidate: number) => boolean): number[] => {
  const results: number[] = [];

  let index = 0;
  let candidate = 0;

  while (candidate < maxFib) {
    if (predicate(candidate)) {
      results.push(candidate);
    }
    candidate = fibAt(index);
    index += 1;
  }

  return results;
};

export const sumEvenFibs = (maxFib: number): number =>
  generateFibs(maxFib, (fib) => fib % 2 === 0).reduce((sum, fib) => sum + fib);
