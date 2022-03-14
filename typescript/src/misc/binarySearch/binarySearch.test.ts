import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it.each([
    [undefined, 10, []],
    [undefined, 10, [20]],
    [0, 10, [10]],
    [0, 10, [10, 20]],
    [1, 10, [5, 10]],
    [1, 10, [5, 10, 20]],
    [1, 10, [5, 10, 20, 30]],
    [2, 10, [5, 7, 10, 30]],
  ])('returns index %s when searching for %i in %j', (expectedIndex, needle, haystack) => {
    expect(binarySearch(needle, haystack)).toEqual(expectedIndex);
  });
});
