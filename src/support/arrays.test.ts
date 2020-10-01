import { chunk, generateSequence } from './arrays';

describe('array support', () => {
  describe('generateSequence', () => {
    it.each([
      [[0, 1, 2, 3, 4], { start: 0, end: 5, inclusive: false }],
      [[0, 1, 2, 3, 4, 5], { start: 0, end: 5, inclusive: true }],
      [[1, 2, 3, 4], { start: 1, end: 5, inclusive: false }],
      [[1, 2, 3, 4, 5], { start: 1, end: 5, inclusive: true }],
      [[], { start: 1, end: 1, inclusive: false }],
      [[1], { start: 1, end: 1, inclusive: true }],
    ])('returns %p for %p', (expected, options) => {
      expect(generateSequence(options)).toEqual(expected);
    });
  });

  describe('chunk', () => {
    it('returns an empty array when given an empty array', () => {
      expect(chunk({ arr: [], chunkSize: 2, mutuallyExclusive: false })).toEqual([]);
    });

    it('returns an empty array when chunkSize is zero', () => {
      expect(chunk({ arr: [1], chunkSize: 0, mutuallyExclusive: false })).toEqual([]);
    });

    it('returns a single chunk of the chunkSize matches the length of the array', () => {
      expect(chunk({ arr: [1], chunkSize: 1, mutuallyExclusive: false })).toEqual([[1]]);
    });

    it('returns the correctly chunked array when mutuallyExclusive is false', () => {
      expect(chunk({ arr: [1, 2, 3, 4], chunkSize: 2, mutuallyExclusive: false })).toEqual([
        [1, 2],
        [2, 3],
        [3, 4],
      ]);
    });

    it('returns the correctly chunked array when mutuallyExclusive is true and the array length mod chunkSize is zero', () => {
      expect(chunk({ arr: [1, 2, 3, 4], chunkSize: 2, mutuallyExclusive: true })).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    it('returns the correctly chunked array when mutuallyExclusive is true and the array length mod chunkSize is not zero', () => {
      expect(chunk({ arr: [1, 2, 3, 4, 5], chunkSize: 2, mutuallyExclusive: true })).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });
  });
});
