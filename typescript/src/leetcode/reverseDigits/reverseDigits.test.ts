import { reverse } from './reverseDigits';

describe('reverse', () => {
  it.each([
    [321, 123],
    [-321, -123],
    [21, 120],
    [0, 0],
    [0, 1534236469],
  ])('returns %i when given %i', (expected, input) => {
    expect(reverse(input)).toEqual(expected);
  });
});
