export const firstUniqChar = (input: string): number => {
  const counts: Record<string, number> = {};
  const firstIndices: Record<string, number> = {};

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];

    counts[character] ??= 0;
    counts[character] += 1;

    firstIndices[character] ??= index;
  }

  let nonRepeatingLowestIndex = -1;

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];

    const count = counts[character];
    const firstIndex = firstIndices[character];

    if (count > 1) {
      continue;
    }

    if (nonRepeatingLowestIndex === -1) {
      nonRepeatingLowestIndex = firstIndex;
    } else if (firstIndex < nonRepeatingLowestIndex) {
      nonRepeatingLowestIndex = firstIndex;
    }
  }

  return nonRepeatingLowestIndex;
};
