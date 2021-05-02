type State = {
  readonly lowestValue: number;
  readonly highestValue: number;
  readonly mostProfit: number;
};

export const maxProfit = (prices: number[]): number => {
  if (prices.length <= 1) {
    return 0;
  }

  const initialState: State = {
    lowestValue: prices[0],
    highestValue: prices[0],
    mostProfit: 0,
  };

  const out = prices.reduce<State>(({ lowestValue, highestValue, mostProfit }, value) => {
    if (value < lowestValue) {
      return { lowestValue: value, highestValue: value, mostProfit };
    }
    if (value > highestValue) {
      return {
        lowestValue,
        highestValue: value,
        mostProfit: Math.max(mostProfit, value - lowestValue),
      };
    }
    return { lowestValue, highestValue, mostProfit };
  }, initialState);

  return out.mostProfit;
};
