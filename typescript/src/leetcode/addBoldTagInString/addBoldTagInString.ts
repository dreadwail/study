export const addBoldTags = (input: string, wordsToBold: string[]): string => {
  const inputIndexToBold: boolean[] = input.split('').map(() => false);

  for (let boldWordIndex = 0; boldWordIndex < wordsToBold.length; boldWordIndex += 1) {
    const wordToBold = wordsToBold[boldWordIndex];
    const indexOfWord = input.indexOf(wordToBold);

    if (indexOfWord === -1) {
      continue;
    }

    for (let inputIndex = indexOfWord; inputIndex < indexOfWord + wordToBold.length; inputIndex += 1) {
      inputIndexToBold[inputIndex] = true;
    }
  }

  const outputParts: string[] = [];

  let isInBold = false;

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];
    const shouldBeBolded = inputIndexToBold[index];

    if (isInBold && !shouldBeBolded) {
      outputParts.push('</b>');
      isInBold = false;
    } else if (!isInBold && shouldBeBolded) {
      outputParts.push('<b>');
      isInBold = true;
    }
    outputParts.push(character);
  }

  if (isInBold) {
    outputParts.push('</b>');
  }

  return outputParts.join('');
};
