export const intersectionOfArrays = (input1: number[], input2: number[]): number[] => {
  let biggestInput: number[];
  let smallestInput: number[];

  if (input1.length > input2.length) {
    biggestInput = input1;
    smallestInput = input2;
  } else {
    biggestInput = input2;
    smallestInput = input1;
  }

  const input1Set = new Set(biggestInput);

  return smallestInput.reduce<number[]>((intersection, current) => {
    if (input1Set.has(current)) {
      return [...intersection, current];
    }
    return intersection;
  }, []);
};
