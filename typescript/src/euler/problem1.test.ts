import { sumFizzBuzz } from './problem1';

describe('sumFizzBuzz', () => {
  it('returns the correct answer for a max number of 10', () => {
    expect(sumFizzBuzz(10)).toEqual(23);
  });

  it('returns the correct answer for a max number of 1000', () => {
    expect(sumFizzBuzz(1000)).toEqual(233168);
  });
});
