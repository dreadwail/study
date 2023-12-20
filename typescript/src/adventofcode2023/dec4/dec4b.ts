type Card = {
  id: number;
  winningNumbers: Set<number>;
  numbers: Set<number>;
};

const parseCard = (cardRow: string): Card => {
  const [idRow, valuesRow] = cardRow.split(': ');
  const [, idChar] = idRow.split(/\s+/);
  const id = parseInt(idChar, 10);
  const [winningNumbersRow, numbersRow] = valuesRow.split(' | ');
  const winningNumberChars = winningNumbersRow.split(/\s+/).map((str) => str.trim());
  const winningNumbers = new Set<number>(winningNumberChars.map((char) => parseInt(char, 10)));
  const numberChars = numbersRow.split(/\s+/).map((str) => str.trim());
  const numbers = new Set<number>(numberChars.map((char) => parseInt(char, 10)));
  return {
    id,
    winningNumbers,
    numbers,
  };
};

const getMatchingNumberCount = (card: Card): number => {
  const matchingNumbers = [...card.numbers].filter((number) => card.winningNumbers.has(number));
  return matchingNumbers.length;
};

type CardIdToWonCount = Record<Card['id'], number>;

const processWonCardIds = (card: Card, cardIdsToWonCount: CardIdToWonCount): void => {
  const matchingNumberCount = getMatchingNumberCount(card);
  if (matchingNumberCount === 0) {
    return;
  }
  const minCardId = card.id + 1;
  const maxCardId = card.id + matchingNumberCount;

  for (let cardId = minCardId; cardId <= maxCardId; cardId += 1) {
    if (cardIdsToWonCount[cardId]) {
      cardIdsToWonCount[cardId] += cardIdsToWonCount[card.id];
    }
  }
};

export const sumOfWonCards = (cardRows: string[]): number => {
  if (cardRows.length === 0) {
    return 0;
  }

  const cards = cardRows.map(parseCard);

  const cardIdToWonCardCount = cards.reduce<CardIdToWonCount>((memo, card) => {
    return {
      ...memo,
      [card.id]: 1,
    };
  }, {});

  cards.forEach((card) => {
    processWonCardIds(card, cardIdToWonCardCount);
  });

  return Object.values(cardIdToWonCardCount).reduce((total, count) => total + count, 0);
};
