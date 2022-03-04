import { uniquePaths } from './uniquePaths';

describe('uniquePaths', () => {
  it.each([
    [2, 2, 2],
    [28, 3, 7],
    [3, 3, 2],
  ])('returns %i for y=%i x=%i', (expected, y, x) => {
    expect(uniquePaths(y, x)).toEqual(expected);
  });
});
