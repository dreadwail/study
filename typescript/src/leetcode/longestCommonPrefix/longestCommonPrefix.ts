export const longestCommonPrefix = (inputs: string[]): string => {
  const lengths = inputs.map((input) => input.length);
  const shortestLength = Math.min(...lengths);

  let i = 0;

  while (i < shortestLength) {
    const characters = inputs.map((input) => input[i]);
    const charactersSet = new Set(characters);
    if (charactersSet.size === 1) {
      i += 1;
    } else {
      break;
    }
  }

  return inputs[0].slice(0, i);
};
