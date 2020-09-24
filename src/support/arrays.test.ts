import { generateSequence } from './arrays';

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
});
