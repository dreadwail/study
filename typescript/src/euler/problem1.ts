import { generateSequence } from 'support/arrays';

export const sumFizzBuzz = (max: number): number => {
  const numbers = generateSequence({ start: 0, end: max, inclusive: false });

  return numbers.reduce((sum, number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      return sum + number;
    }
    return sum;
  });
};
