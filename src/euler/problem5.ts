import { generateSequence } from 'support/arrays';

export const smallestMultiple = (maxFactor: number): number => {
  let candidate = maxFactor;
  const factors = generateSequence({ start: 1, end: maxFactor, inclusive: true });
  while (!factors.every((factor) => candidate % factor === 0)) {
    candidate += maxFactor;
  }
  return candidate;
};
