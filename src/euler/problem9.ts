const isPythagoreanTriplet = (a: number, b: number, c: number): boolean => {
  if (a >= b) {
    return false;
  }
  if (b >= c) {
    return false;
  }
  return a ** 2 + b ** 2 === c ** 2;
};

export const specialPythagoreanTripletProduct = (sum: number): number => {
  const tripletSumsCorrectly = (a: number, b: number, c: number) => a + b + c === sum;

  const isSpecialPythagoreanTriplet = (a: number, b: number, c: number) =>
    tripletSumsCorrectly(a, b, c) && isPythagoreanTriplet(a, b, c);

  for (let a = 0; a < sum; a += 1) {
    for (let b = a + 1; b < sum; b += 1) {
      for (let c = b + 1; c < sum; c += 1) {
        if (isSpecialPythagoreanTriplet(a, b, c)) {
          return a * b * c;
        }
      }
    }
  }

  return 0;
};
