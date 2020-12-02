export const productOfSumEqualTo = (sum: number, input: number[]) => {
  const values = new Set(input);

  let number1 = 0;
  let number2 = 0;

  values.forEach((value) => {
    const toFind = sum - value;
    if (values.has(toFind)) {
      number1 = value;
      number2 = toFind;
    }
  });

  return number1 * number2;
};
