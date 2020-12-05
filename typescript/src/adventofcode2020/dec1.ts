export const productOfTwoSumEqualTo = (sum: number, input: number[]): number => {
  const set = new Set(input);

  for (let i = 0; i < input.length; i += 1) {
    const numberHere = input[i];
    const numberNeeded = sum - numberHere;
    if (set.has(numberNeeded)) {
      return numberHere * numberNeeded;
    }
  }

  return 0;
};

export const productOfThreeSumEqualTo = (sum: number, input: number[]): number => {
  const tuples: number[][] = [];

  for (let number1index = 0; number1index < input.length; number1index += 1) {
    const number1 = input[number1index];
    for (let number2index = 0; number2index < input.length; number2index += 1) {
      const number2 = input[number2index];
      tuples.push([number1, number2]);
    }
  }

  const sumsToTuples = new Map<number, number[]>();

  for (let tupleIndex = 0; tupleIndex < tuples.length; tupleIndex += 1) {
    const tuple = tuples[tupleIndex];
    const sum = tuple[0] + tuple[1];
    sumsToTuples.set(sum, tuple);
  }

  for (let number3index = 0; number3index < input.length; number3index += 1) {
    const numberHere = input[number3index];
    const numberNeeded = sum - numberHere;

    if (sumsToTuples.has(numberNeeded)) {
      const tuple = sumsToTuples.get(numberNeeded) || [];
      return [...tuple, numberHere].reduce((product, current) => product * current);
    }
  }

  return 0;
};
