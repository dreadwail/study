type State = {
  buyPrice: number;
  profit: number;
};

export const maxProfit = (input: number[]): number => {
  const endState = input.reduce<State>(
    ({ buyPrice, profit }, current, index) => {
      if (index === 0) {
        return { buyPrice, profit };
      }

      const previous = input[index - 1];
      if (current <= previous) {
        return { profit: profit + previous - buyPrice, buyPrice: current };
      }
      if (index === input.length - 1) {
        return { profit: profit + current - buyPrice, buyPrice };
      }
      return { buyPrice, profit };
    },
    {
      buyPrice: input[0],
      profit: 0,
    }
  );

  return endState.profit;
};
