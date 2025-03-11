export const intersectionOfArrays = <T>(array1: T[], array2: T[]): T[] => {
  const array2Set = new Set(array2);
  const intersectionSet = new Set(array1.filter((element) => array2Set.has(element)));
  return [...intersectionSet];
};
