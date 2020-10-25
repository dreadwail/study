const isPalindromeNumber = (suspect: number): boolean => {
  const asString = `${suspect}`;
  const characters = asString.split('');
  const reversedCharacters = characters.reverse();
  const reversed = reversedCharacters.join('');
  return reversed === asString;
};

export const largestPalindromeProduct = (digits: number) => {
  const max = 10 ** digits - 1;

  const products: number[] = [];

  for (let a = 1; a <= max; a += 1) {
    for (let b = 1; b <= max; b += 1) {
      products.push(a * b);
    }
  }

  const palindromeNumbers = products.filter(isPalindromeNumber);

  return Math.max(...palindromeNumbers);
};
