const biggestInput = Math.pow(2, 31) - 1;
const biggestSquareRoot = Math.floor(Math.sqrt(biggestInput));

export const sqrtNative = (x: number): number => Math.floor(Math.sqrt(x));

export const sqrt = (x: number): number => {
  let candidate = 1;

  while (candidate <= biggestSquareRoot) {
    const squared = candidate * candidate;
    if (squared === x) {
      return candidate;
    }
    if (squared > x) {
      return candidate - 1;
    }
    candidate += 1;
  }

  return candidate - 1;
};
