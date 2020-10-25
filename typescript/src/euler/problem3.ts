export const largestPrimeFactor = (product: number): number | undefined => {
  let factor = 2;
  let currentLargest = product;
  while (factor <= currentLargest) {
    if (currentLargest % factor === 0) {
      currentLargest = Math.floor(currentLargest / factor);
    } else {
      factor += 1;
    }
  }
  return factor;
};
