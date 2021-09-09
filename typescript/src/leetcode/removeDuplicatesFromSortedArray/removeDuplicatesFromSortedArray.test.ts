import { removeDuplicates } from './removeDuplicatesFromSortedArray';

describe('removeDuplicates', () => {
  describe.each([
    [[1, 1, 2], 2, [1, 2, undefined]],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5, [0, 1, 2, 3, 4, undefined, undefined, undefined, undefined, undefined]],
  ])('for an input array %j', (inputArray, expectedRemainingCount, expectedOutputArray) => {
    it('returns the correct remainingCount', () => {
      const toModify = [...inputArray];
      const remainingCount = removeDuplicates(toModify);
      expect(remainingCount).toEqual(expectedRemainingCount);
    });

    it('correctly in-place removes the duplicates', () => {
      const toModify = [...inputArray];
      removeDuplicates(toModify);
      expect(toModify).toEqual(expectedOutputArray);
    });
  });
});
