type CharacterCounts = Record<string, number>;

const toCounts = (str: string): CharacterCounts =>
  str.split('').reduce<CharacterCounts>((counts, character) => {
    counts[character] = counts[character] || 0;
    counts[character] += 1;
    return counts;
  }, {});

export const isAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1counts = toCounts(str1);
  const str2counts = toCounts(str2);

  return Object.keys(str1counts).every((key) => str1counts[key] === str2counts[key]);
};

export const isAnagramUsingSort = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1charsSorted = [...str1].sort();
  const str2charsSorted = [...str2].sort();

  return str1charsSorted.every((character, index) => str2charsSorted[index] === character);
};
