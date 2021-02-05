export const isAnagramUsingSort = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1charsSorted = [...str1].sort();
  const str2charsSorted = [...str2].sort();

  return str1charsSorted.every((character, index) => str2charsSorted[index] === character);
};

type CharacterCounts = Record<string, number>;

const toCounts = (str: string): CharacterCounts => {
  const counts: CharacterCounts = {};
  for (let i = 0; i < str.length; i += 1) {
    const character = str[i];
    counts[character] = counts[character] || 0;
    counts[character] += 1;
  }
  return counts;
};

export const isAnagramWithCountsEach = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1counts = toCounts(str1);
  const str2counts = toCounts(str2);

  return Object.keys(str1counts).every((key) => str1counts[key] === str2counts[key]);
};

export const isAnagramWithCounts = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCounts = toCounts(str1);

  for (let i = 0; i < str2.length; i += 1) {
    const str2char = str2[i];
    if (!charCounts[str2char]) {
      return false;
    }
    charCounts[str2char] -= 1;
  }

  return Object.values(charCounts).every((count) => count === 0);
};
