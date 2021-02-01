export const fizzBuzz = (n: number): string[] =>
  Array(n)
    .fill(0)
    .map((_, index) => {
      const number = index + 1;
      const isFizz = number % 3 === 0;
      const isBuzz = number % 5 === 0;
      if (isFizz && isBuzz) {
        return 'FizzBuzz';
      }
      if (isFizz) {
        return 'Fizz';
      }
      if (isBuzz) {
        return 'Buzz';
      }
      return `${number}`;
    });
