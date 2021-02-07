const determineLargestPlace = (num: number): number => {
  let place = 1;
  while (num >= place * 10 - 1) {
    place *= 10;
  }
  return place;
};

const sumOfDigitSquares = (num: number): number => {
  let place = determineLargestPlace(num);

  const digits: number[] = [];

  let current = num;

  while (current > 0) {
    const digit = Math.floor(current / place);
    digits.push(digit);
    current = current - digit * place;
    place = place / 10;
  }

  const squares = digits.map((digit) => digit * digit);
  return squares.reduce((sum, square) => sum + square, 0);
};

export const isHappy = (num: number): boolean => {
  const previousSums = new Set<number>();

  let sum = num;

  do {
    previousSums.add(sum);
    sum = sumOfDigitSquares(sum);
    if (sum === 1) {
      return true;
    }
  } while (!previousSums.has(sum));

  return sum === 1;
};
