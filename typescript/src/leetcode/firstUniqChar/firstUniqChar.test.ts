import { firstUniqChar } from './firstUniqChar';

describe('firstUniqChar', () => {
  it.each([
    [0, 'leetcode'],
    [2, 'loveleetcode'],
    [-1, ''],
    [-1, 'cc'],
  ])('it returns %i for input "%s"', (expected, input) => {
    expect(firstUniqChar(input)).toEqual(expected);
  });
});
