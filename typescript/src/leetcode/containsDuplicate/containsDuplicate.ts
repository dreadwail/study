export const containsDuplicate = (values: number[]): boolean => {
  const set = new Set();

  for (let index = 0; index < values.length; index += 1) {
    const valueHere = values[index];
    if (set.has(valueHere)) {
      return true;
    }
    set.add(valueHere);
  }

  return false;
};
