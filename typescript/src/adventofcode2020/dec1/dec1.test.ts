import { productOfThreeSumEqualTo, productOfTwoSumEqualTo } from './dec1';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('dec1 Dreadwail', () => {
  let input: number[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.dreadwail.txt');
    input = readRows(filePath).map((row) => parseInt(row, 10));
  });

  it('computes the correct answer for a 2020 sum with 2 numbers', () => {
    expect(productOfTwoSumEqualTo(2020, input)).toEqual(955584);
  });

  it('computes the correct answer for a 2020 sum with 3 numbers', () => {
    expect(productOfThreeSumEqualTo(2020, input)).toEqual(287503934);
  });
});

describe('dec1 Susanna', () => {
  let input: number[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.susanna.txt');
    input = readRows(filePath).map((row) => parseInt(row, 10));
  });

  it('computes the correct answer for a 2020 sum with 2 numbers', () => {
    expect(productOfTwoSumEqualTo(2020, input)).toEqual(1020099);
  });

  it('computes the correct answer for a 2020 sum with 3 numbers', () => {
    expect(productOfThreeSumEqualTo(2020, input)).toEqual(49214880);
  });
});
