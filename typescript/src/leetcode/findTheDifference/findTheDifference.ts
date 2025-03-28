const countCharacters = (input: string): Record<string, number> => {
  const counts: Record<string, number> = {};

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];
    counts[character] ??= 0;
    counts[character] += 1;
  }

  return counts;
};

export const findTheDifference = (original: string, shuffled: string): string | undefined => {
  const originalCharacterCounts = countCharacters(original);
  const shuffledCharacterCounts = countCharacters(shuffled);

  return Object.keys(shuffledCharacterCounts).find(
    (character) => originalCharacterCounts[character] !== shuffledCharacterCounts[character]
  );
};
