import { isAnagram, isAnagramUsingSort } from './isAnagram';

describe.each([isAnagram, isAnagramUsingSort])('isAnagram', (func) => {
  it('correctly identifies anagrams', () => {
    expect(func('anagram', 'nagaram')).toBe(true);
  });

  it('correctly identifies non-anagrams', () => {
    expect(func('blerg', 'bloop')).toBe(false);
  });
});
