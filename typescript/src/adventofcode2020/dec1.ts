export const productOfTwoSumEqualTo = (sum: number, input: number[]): number => {
  for (let a = 0; a < input.length; a += 1) {
    for (let b = 0; b < input.length; b += 1) {
      const numA = input[a];
      const numB = input[b];
      if (numA + numB === sum) {
        return numA * numB;
      }
    }
  }
  return 0;
};

export const productOfThreeSumEqualTo = (sum: number, input: number[]): number => {
  for (let a = 0; a < input.length; a += 1) {
    for (let b = 0; b < input.length; b += 1) {
      for (let c = 0; c < input.length; c += 1) {
        const numA = input[a];
        const numB = input[b];
        const numC = input[c];
        if (numA + numB + numC === sum) {
          return numA * numB * numC;
        }
      }
    }
  }
  return 0;
};
