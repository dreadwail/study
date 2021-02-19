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

  const counts = biggestInput.reduce<Record<number, number>>(
    (counts, current) => ({
      ...counts,
      [current]: (counts[current] || 0) + 1,
    }),
    {}
  );

  return smallestInput.reduce<number[]>((intersection, current) => {
    if (counts[current] && counts[current] > 0) {
      counts[current] = counts[current] - 1;
      return [...intersection, current];
    }
    return intersection;
  }, []);
};
