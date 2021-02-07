import { isHappy } from './happyNumber';

describe('isHappy', () => {
  it.each([
    [true, 19],
    [false, 2],
  ])('returns %s for %i', (expected, input) => {
    expect(isHappy(input)).toBe(expected);
  });
});
