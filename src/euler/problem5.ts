export const smallestMultiple = (maxFactor: number): number => {
  let candidate = maxFactor;
  const factors = [...Array(maxFactor).keys()].map((_, index) => index + 1);
  while (!factors.every((factor) => candidate % factor === 0)) {
    candidate += maxFactor;
  }
  return candidate;
};
