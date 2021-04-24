import { arrayToList, isNonEmpty, listToArray } from 'support/lists';
import { mergeTwoSortedLists } from './mergeTwoSortedLists';

describe('mergeTwoSortedLists', () => {
  it.each([
    [
      [1, 1, 2, 3, 4, 4],
      [1, 2, 4],
      [1, 3, 4],
    ],
    [[], [], []],
    [[0], [], [0]],
    [[1, 2], [2], [1]],
  ])('returns %j for %j and %j', (expectedArray, list1Array, list2Array) => {
    const list1 = isNonEmpty(list1Array) ? arrayToList(list1Array) : null;
    const list2 = isNonEmpty(list2Array) ? arrayToList(list2Array) : null;
    const merged = mergeTwoSortedLists(list1, list2);
    const mergedArray = merged === null ? [] : listToArray(merged);
    expect(mergedArray).toEqual(expectedArray);
  });
});
