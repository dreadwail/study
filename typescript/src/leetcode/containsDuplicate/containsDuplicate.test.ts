import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicate', () => {
  it.each([
    [true, [1, 2, 3, 1]],
    [false, [1, 2, 3, 4]],
    [true, [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
  ])('returns %s for %j', (expected, input) => {
    expect(containsDuplicate(input)).toBe(expected);
  });
});
