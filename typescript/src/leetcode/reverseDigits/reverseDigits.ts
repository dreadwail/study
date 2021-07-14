const MIN = 0 - 2 ** 31;
const MAX = 2 ** 31 - 1;

export const reverse = (input: number) => {
  const wasNegative = input < 0;

  const inputDigits = `${input}`.split('');
  const reversedDigits = inputDigits.reverse();
  const reversedNumberAsString = reversedDigits.join('');
  const asNumber = parseInt(reversedNumberAsString, 10);

  if (wasNegative) {
    const negativeOutput = 0 - asNumber;
    if (negativeOutput < MIN) {
      return 0;
    }
    return negativeOutput;
  }

  if (asNumber > MAX) {
    return 0;
  }
  return asNumber;
};
