import { generateSequence } from 'support/arrays';

const sumOfSquares = (max: number): number => {
  const numbersToSquare = generateSequence({ start: 1, end: max, inclusive: true });
  return numbersToSquare.reduce((sum, current) => sum + current ** 2);
};

const squareOfSum = (max: number): number => {
  const numbers = generateSequence({ start: 1, end: max, inclusive: true });
  const sum = numbers.reduce((sum, current) => sum + current);
  return sum ** 2;
};

export const sumSquareDifference = (max: number): number => Math.abs(sumOfSquares(max) - squareOfSum(max));
