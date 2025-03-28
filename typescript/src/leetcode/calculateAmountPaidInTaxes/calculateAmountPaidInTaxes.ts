export const calculateTax = (brackets: number[][], income: number): number => {
  let currentDollarPointer = 0;
  let taxes = 0;

  for (const [upper, ratePercent] of brackets) {
    if (currentDollarPointer > income) {
      break;
    }

    const rate = ratePercent / 100;
    const amount = Math.min(upper, income) - currentDollarPointer;
    const taxHere = amount * rate;

    taxes += taxHere;

    currentDollarPointer = upper;
  }

  return taxes;
};
