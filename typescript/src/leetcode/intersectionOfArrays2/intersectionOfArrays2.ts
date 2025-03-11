const countElements = (array: number[]): Record<number, number> => {
  const counts: Record<number, number> = {};
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    counts[element] ??= 0;
    counts[element] += 1;
  }
  return counts;
};

export const intersect = (array1: number[], array2: number[]): number[] => {
  const array1Counts = countElements(array1);
  const array2Counts = countElements(array2);

  const array2Set = new Set(array2);
  const intersectionSet = new Set(array1.filter((element) => array2Set.has(element)));

  const intersectionOutput: number[] = [];

  for (const intersectingElement of intersectionSet) {
    const countFromArray1 = array1Counts[intersectingElement];
    const countFromArray2 = array2Counts[intersectingElement];

    const countToEmit = Math.min(countFromArray1, countFromArray2);

    const elementsToEmit = Array(countToEmit).fill(intersectingElement);
    elementsToEmit.forEach((element) => intersectionOutput.push(element));
  }

  return intersectionOutput;
};
