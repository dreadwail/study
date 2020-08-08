import { sumEvenFibs } from './problem2';

describe('sumEvenFibs', () => {
  it('returns the correct answer for a maxFib of 50', () => {
    expect(sumEvenFibs(50)).toEqual(44);
  });

  it('returns the correct answer for a maxFib of 4000000', () => {
    expect(sumEvenFibs(4000000)).toEqual(4613732);
  });
});
