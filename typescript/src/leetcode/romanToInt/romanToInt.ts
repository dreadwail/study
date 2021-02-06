const numeralToValue: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanToInt = (input: string): number => {
  const values: number[] = [];

  for (let i = 0; i < input.length; i += 1) {
    const numeral = input[i];
    const value = numeralToValue[numeral];

    if (i === 0) {
      values.push(value);
      continue;
    }

    const precedingValue = values[i - 1];
    if (precedingValue < value) {
      values[i - 1] = 0;
      values.push(value - precedingValue);
    } else {
      values.push(value);
    }
  }

  return values.reduce((sum, value) => sum + value);
};
