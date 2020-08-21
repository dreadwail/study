/* eslint-disable no-console */
import { generateSequence } from '../support';

const factorsCache: Record<number, number[]> = {
  1: [1],
};

const isFactor = (suspect: number, product: number): boolean => product % suspect === 0;

const factorsOf = (product: number): number[] => {
  if (factorsCache[product]) {
    return factorsCache[product];
  }
  const numbersUpThroughSuspect = generateSequence({ startsAt: 1, max: product, inclusive: true });
  const factors = numbersUpThroughSuspect.filter((value) => isFactor(value, product));
  factorsCache[product] = factors;
  return factors;
};

const isPrime = (suspect: number): boolean => {
  const factors = factorsOf(suspect);
  if (factors.length > 2) {
    return false;
  }
  const [factor1, factor2] = factors;
  return factor1 === 1 && factor2 === suspect;
};

const primeFactorsOf = (product: number): number[] => {
  const factors = factorsOf(product);
  return factors.filter(isPrime);
};

export const largestPrimeFactor = (product: number): number | undefined => {
  const primeFactors = primeFactorsOf(product);
  const primeFactorsDescending = primeFactors.sort((a, b) => b - a);
  return primeFactorsDescending[0];
};
