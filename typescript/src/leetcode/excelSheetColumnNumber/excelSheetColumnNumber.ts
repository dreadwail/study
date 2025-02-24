const zeroCharCode = 'A'.charCodeAt(0) - 1;

const getNumericValue = (char: string): number => {
  const charCode = char.charCodeAt(0);
  return charCode - zeroCharCode;
};

export const titleToNumber = (title: string): number => {
  let sum = 0;
  let multiple = 1;

  for (let index = title.length - 1; index >= 0; index -= 1) {
    const charHere = title.charAt(index);
    const numericValue = getNumericValue(charHere);

    sum += numericValue * multiple;

    multiple *= 26;
  }

  return sum;
};
