export const sumFizzBuzz = (max: number): number => {
  let sum = 0;
  for (let number = 0; number < max; number += 1) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }
  return sum;
};
