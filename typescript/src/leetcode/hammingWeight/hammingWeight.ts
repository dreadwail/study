export const hammingWeight = (num: number): number => {
  let current = num;
  let bits = 0;

  while (current > 0) {
    bits += current % 2;
    current = Math.floor(current / 2);
  }

  return bits;
};
