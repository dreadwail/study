import { distMoney } from './distributeMoneyToMaximumChildren';

describe('distMoney', () => {
  it.each([
    [-1, 2, 3],
    [1, 20, 3],
    [2, 16, 2],
    [1, 9, 2],
    [0, 4, 2],
    [0, 5, 2],
    [0, 8, 2],
    [0, 9, 3],
    [1, 10, 3],
    [1, 12, 3],
    [1, 16, 3],
    [0, 16, 10],
  ])('returns %p when money=%p and children=%p', (expected, money, children) => {
    const result = distMoney(money, children);
    expect(result).toEqual(expected);
  });
});
