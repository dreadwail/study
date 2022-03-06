interface Cache {
  read: (index1: number, index2: number) => number | undefined;
  write: (index1: number, index2: number, count: number) => void;
}

const longestCommonSubsequenceRecursive = (
  text1: string,
  text2: string,
  index1: number,
  index2: number,
  cache: Cache
): number => {
  const cached = cache.read(index1, index2);
  if (cached !== undefined) {
    return cached;
  }

  if (index1 === text1.length || index2 === text2.length) {
    cache.write(index1, index2, 0);
    return 0;
  }

  const character1 = text1[index1];
  const character2 = text2[index2];

  if (character1 === character2) {
    const count = 1 + longestCommonSubsequenceRecursive(text1, text2, index1 + 1, index2 + 1, cache);
    cache.write(index1, index2, count);
    return count;
  }

  const count = Math.max(
    longestCommonSubsequenceRecursive(text1, text2, index1 + 1, index2, cache),
    longestCommonSubsequenceRecursive(text1, text2, index1, index2 + 1, cache)
  );
  cache.write(index1, index2, count);
  return count;
};

export const longestCommonSubsequence = (text1: string, text2: string): number => {
  if (text1 === text2) {
    return text1.length;
  }

  const cacheKeyFor = (index1: number, index2: number) => [index1, index2].join(':');
  const cacheStorage: Record<string, number> = {};

  const cache: Cache = {
    read: (index1, index2) => {
      const cacheKey = cacheKeyFor(index1, index2);
      return cacheStorage[cacheKey];
    },
    write: (index1, index2, count) => {
      const cacheKey = cacheKeyFor(index1, index2);
      cacheStorage[cacheKey] = count;
    },
  };
  return longestCommonSubsequenceRecursive(text1, text2, 0, 0, cache);
};
