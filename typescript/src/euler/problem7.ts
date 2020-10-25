const isPrime = (suspect: number): boolean => {
  if (suspect < 2) {
    return false;
  }
  for (let i = 2; i < suspect; i += 1) {
    if (suspect % i === 0) {
      return false;
    }
  }
  return true;
};

export const nthPrime = (primeIndex: number): number => {
  let currentNumber = 0;
  let currentPrimeIndex = 0;

  while (currentPrimeIndex < primeIndex) {
    currentNumber += 1;
    if (isPrime(currentNumber)) {
      currentPrimeIndex += 1;
    }
  }

  return currentNumber;
};
