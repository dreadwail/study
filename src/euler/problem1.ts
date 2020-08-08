import { generateSequence } from '../support';

export const sumFizzBuzz = (max: number): number =>
  generateSequence(max).reduce((sum, number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      return sum + number;
    }
    return sum;
  }, 0);
