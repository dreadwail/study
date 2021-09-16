export const strStrNative = (haystack: string, needle: string): number => haystack.indexOf(needle);

export const strStr = (haystack: string, needle: string): number => {
  if (needle.length === 0) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i += 1) {
    const sliced = haystack.slice(i, i + needle.length);
    if (sliced === needle) {
      return i;
    }
  }
  return -1;
};
