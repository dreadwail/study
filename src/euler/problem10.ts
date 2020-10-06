export const sumPrimes = (upTo: number) => {
  const nonPrimesSet = new Set([1]);

  for (let multiple = 2; multiple < upTo; multiple += 1) {
    for (let nonPrime = multiple + multiple; nonPrime < upTo; nonPrime += multiple) {
      nonPrimesSet.add(nonPrime);
    }
  }

  let sum = 2;

  for (let n = 3; n < upTo; n += 2) {
    if (!nonPrimesSet.has(n)) {
      sum += n;
    }
  }

  return sum;
};
