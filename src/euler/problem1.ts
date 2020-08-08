export const sumFizzBuzz = (max: number): number =>
  Array.from(Array(max).keys()).reduce((sum, number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      return sum + number;
    }
    return sum;
  }, 0);
