const portionSizeToTarget = 8;
const portionSizeToExclude = 4;

export const distMoney = (money: number, childrenCount: number): number => {
  if (money < childrenCount) {
    return -1;
  }
  if (money === portionSizeToTarget) {
    return 0;
  }

  let moneyRemaining = money;

  const idealCount = Math.min(childrenCount, Math.floor(moneyRemaining / portionSizeToTarget));
  const nonIdealCount = childrenCount - idealCount;
  const idealMoneyConsumed = idealCount * portionSizeToTarget;

  moneyRemaining -= idealMoneyConsumed;

  if (moneyRemaining < nonIdealCount) {
    return idealCount - 1;
  }
  if (idealCount === childrenCount - 1 && moneyRemaining === portionSizeToExclude) {
    return idealCount - 1;
  }
  if (idealCount === childrenCount && moneyRemaining) {
    return idealCount - 1;
  }
  return idealCount;
};
