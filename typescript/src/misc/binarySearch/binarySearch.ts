export const binarySearch = (needle: number, haystack: number[]): number | undefined => {
  let startIndex = 0;
  let endIndex = haystack.length - 1;

  while (startIndex < endIndex) {
    const spanSize = endIndex - startIndex;
    const halfSpanSize = Math.floor(spanSize / 2);
    const partitionIndex = startIndex + halfSpanSize;
    const partitionElement = haystack[partitionIndex];

    if (needle < partitionElement) {
      endIndex = partitionIndex - 1;
    } else if (needle > partitionElement) {
      startIndex = partitionIndex + 1;
    } else {
      return partitionIndex;
    }
  }

  if (haystack[startIndex] === needle) {
    return startIndex;
  }
  return undefined;
};
