import { maxProfit } from './bestTimeToBuyAndSellStock';

describe('maxProfit', () => {
  it.each([
    [5, [7, 1, 5, 3, 6, 4]],
    [0, [7, 6, 4, 3, 1]],
    [2, [2, 4, 1]],
  ])('returns %i for %j', (expected, input) => {
    expect(maxProfit(input)).toEqual(expected);
  });
});
