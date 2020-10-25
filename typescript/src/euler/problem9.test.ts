import { specialPythagoreanTripletProduct } from './problem9';

describe('specialPythagoreanTripletProduct', () => {
  it.each([
    [60, 12],
    [31875000, 1000],
  ])('returns product %i for sum %i', (product, sum) => {
    expect(specialPythagoreanTripletProduct(sum)).toEqual(product);
  });
});
