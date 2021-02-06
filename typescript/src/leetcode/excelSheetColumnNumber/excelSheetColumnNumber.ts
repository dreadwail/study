const letterCount = 26;
const charCodeA = 'A'.charCodeAt(0);

const characterToValue = (char: string): number => {
  const code = char.charCodeAt(0);
  return code - charCodeA + 1;
};

export const titleToNumber = (str: string): number => {
  let columnNumber = 0;
  let place = Math.pow(letterCount, str.length - 1);

  for (let i = 0; i < str.length; i += 1) {
    const character = str[i];
    const value = characterToValue(character) * place;
    place = place / letterCount;
    columnNumber += value;
  }

  return columnNumber;
};
