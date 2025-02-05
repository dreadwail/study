export const maxProfit = (input: number[]): number => {
  if (input.length < 2) {
    return 0;
  }

  let profit = 0;
  let costBasis: null | number = null;

  for (let index = 0; index < input.length; index += 1) {
    const valueYesterday = input[index - 1] ?? 0;
    const valueToday = input[index];

    if (costBasis !== null && valueToday > valueYesterday && valueToday > costBasis) {
      profit += valueToday - costBasis;
      costBasis = null;
    }

    costBasis = valueToday;
  }

  return profit;
};
