export const maxProfit = (input: number[]): number => {
  if (input.length < 2) {
    return 0;
  }

  let lowestValue = input[0];
  let greatestProfit = 0;

  for (let index = 0; index < input.length; index += 1) {
    const valueHere = input[index];
    if (valueHere < lowestValue) {
      lowestValue = valueHere;
    }
    const profitHere = valueHere - lowestValue;
    if (profitHere > greatestProfit) {
      greatestProfit = profitHere;
    }
  }

  return greatestProfit;
};
