type PersonId = string;
type PeopleToAmount = Record<PersonId, number>;

export const distributeEvenly = (moneyPool: number, amountsOwed: PeopleToAmount): PeopleToAmount => {
  const personIds = Object.keys(amountsOwed);
  const numberOfPeople = personIds.length;

  const amountsPaid: PeopleToAmount = personIds.reduce((memo, personId) => ({ ...memo, [personId]: 0 }), {});

  const totalAmountOwed = personIds.reduce((memo, personId) => memo + amountsOwed[personId], 0);
  const amountToPayOut = Math.min(moneyPool, totalAmountOwed);

  let moneyRemaining = amountToPayOut;

  while (moneyRemaining > 0) {
    const distributionAmount = Math.floor(moneyRemaining / numberOfPeople) || 1;

    personIds.forEach((personId) => {
      if (moneyRemaining >= distributionAmount && amountsPaid[personId] < amountsOwed[personId]) {
        amountsPaid[personId] += distributionAmount;
        moneyRemaining -= distributionAmount;
      }
    });
  }

  return amountsPaid;
};
