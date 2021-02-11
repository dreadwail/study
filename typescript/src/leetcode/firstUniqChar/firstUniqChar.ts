export const firstUniqChar = (str: string): number => {
  if (str.length === 0) {
    return -1;
  }

  const characterCounts: Record<string, number> = {};

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    characterCounts[char] = characterCounts[char] || 0;
    characterCounts[char] += 1;
  }

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    const count = characterCounts[char];
    if (count === 1) {
      return i;
    }
  }

  return -1;
};
