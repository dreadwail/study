import { chunk } from 'support/arrays';

const computeChunkProduct = (digits: number[]): number => digits.reduce((product, current) => product * current);

export const findGreatestAdjacentDigitProduct = (number: bigint, digitCount: number): number => {
  const digits = `${number}`.split('').map((char) => parseInt(char, 10));
  const chunks = chunk({ arr: digits, chunkSize: digitCount, mutuallyExclusive: false });
  const products = chunks.map(computeChunkProduct);
  return Math.max(...products);
};
