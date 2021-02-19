export const formLargestNumber = (input: number[]): number => {
  const sorted = input
    .map((num) => `${num}`)
    .sort((a, b) => {
      let aPtr = 0;
      let bPtr = 0;

      while (aPtr < a.length || bPtr < b.length) {
        const aDigit = a[aPtr];
        const bDigit = b[bPtr];

        if (aDigit > bDigit) {
          return -1;
        }
        if (aDigit < bDigit) {
          return 1;
        }

        if (aPtr < a.length - 1) {
          aPtr += 1;
        }
        if (bPtr < b.length - 1) {
          bPtr += 1;
        }
      }
      return 0;
    });

  const combined = sorted.join('');
  return parseInt(combined);
};
