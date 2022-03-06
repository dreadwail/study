import { longestCommonSubsequence } from './longestCommonSubsequence';

describe('longestCommonSubsequence', () => {
  it.each([
    [3, 'abcde', 'ace'],
    [3, 'abc', 'abc'],
    [0, 'abc', 'def'],
    [2, 'oxcpqrsvwf', 'shmtulqrypy'],
    [1, 'bsbininm', 'jmjkbkjkv'],
  ])('returns %i when given strings "%s" and "%s"', (expected, text1, text2) => {
    expect(longestCommonSubsequence(text1, text2)).toEqual(expected);
  });
});
