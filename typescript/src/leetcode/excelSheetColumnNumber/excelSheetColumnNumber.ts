const charCodeA = 'A'.charCodeAt(0);

const characterToValue = (char: string): number => {
  const code = char.charCodeAt(0);
  return code - charCodeA + 1;
};

export const titleToNumber = (str: string): number => {
  let columnNumber = 0;
  let place = Math.max((str.length - 1) * 26, 1);

  for (let i = 0; i < str.length; i += 1) {
    const character = str[i];
    const value = characterToValue(character) * place;
    place = place / 26;
    columnNumber += value;
  }

  return columnNumber;
};
