type Reduced = { outputDigits: number[]; carry: number };

export const plusOne = (digits: number[]): number[] => {
  const { carry, outputDigits } = digits.reduceRight<Reduced>(
    ({ outputDigits, carry }, digit) => {
      const sumHere = carry + digit;
      if (sumHere > 9) {
        return { carry: sumHere - 9, outputDigits: [sumHere - 10, ...outputDigits] };
      }
      return { carry: 0, outputDigits: [sumHere, ...outputDigits] };
    },
    {
      outputDigits: [],
      carry: 1,
    }
  );

  return carry ? [carry, ...outputDigits] : outputDigits;
};
