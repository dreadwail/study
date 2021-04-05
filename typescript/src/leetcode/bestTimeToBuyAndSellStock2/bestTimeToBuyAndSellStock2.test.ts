import { maxProfit } from './bestTimeToBuyAndSellStock2';

describe('maxProfit', () => {
  it.each([
    [7, [7, 1, 5, 3, 6, 4]],
    [4, [1, 2, 3, 4, 5]],
    [0, [7, 6, 4, 3, 1]],
    [2, [2, 1, 2, 0, 1]],
  ])('returns %i when given %s', (expected, input) => {
    expect(maxProfit(input)).toEqual(expected);
  });
});
