type Card = {
  winningNumbers: Set<number>;
  numbers: Set<number>;
};

const parseCard = (cardRow: string): Card => {
  const [, valuesRow] = cardRow.split(': ');
  const [winningNumbersRow, numbersRow] = valuesRow.split(' | ');
  const winningNumberChars = winningNumbersRow.split(/\s+/).map((str) => str.trim());
  const winningNumbers = new Set<number>(winningNumberChars.map((char) => parseInt(char, 10)));
  const numberChars = numbersRow.split(/\s+/).map((str) => str.trim());
  const numbers = new Set<number>(numberChars.map((char) => parseInt(char, 10)));
  return {
    winningNumbers,
    numbers,
  };
};

const scoreCard = (card: Card): number => {
  const matchingNumbers = [...card.numbers].filter((number) => card.winningNumbers.has(number));
  if (matchingNumbers.length === 0) {
    return 0;
  }
  return 1 << (matchingNumbers.length - 1);
};

export const sumOfCardPoints = (cardRows: string[]): number => {
  const cards = cardRows.map(parseCard);
  const scores = cards.map(scoreCard);
  return scores.reduce((total, score) => total + score, 0);
};
