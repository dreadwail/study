export const interleaveArrays = <T>(arrays: T[][]) => {
  let arrayPtr = 0;
  const output = [];

  const expectedOutputLength = arrays.map((arr) => arr.length).reduce((total, length) => total + length);

  while (output.length < expectedOutputLength) {
    const toPickFrom = arrays[arrayPtr];
    if (toPickFrom.length > 0) {
      output.push(toPickFrom.shift());
    }
    arrayPtr = (arrayPtr + 1) % arrays.length;
  }

  return output;
};
