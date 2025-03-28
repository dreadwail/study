import { calculateTax } from './calculateAmountPaidInTaxes';

describe('calculateTax', () => {
  it.each([
    [
      2.65,
      [
        [3, 50],
        [7, 10],
        [12, 25],
      ],
      10,
    ],
    [
      0.25,
      [
        [1, 0],
        [4, 25],
        [5, 50],
      ],
      2,
    ],
    [0, [[2, 50]], 0],
  ])('returns a tax rate of %p when given brackets %j and income %p', (expectedRate, brackets, income) => {
    const rate = calculateTax(brackets, income);
    expect(rate).toEqual(expectedRate);
  });
});
