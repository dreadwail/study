import { addBoldTags } from './addBoldTagInString';

describe('addBoldTags', () => {
  it('returns a string with the specified words bolded', () => {
    const result = addBoldTags('abcxyz123', ['abc', '123']);
    expect(result).toEqual('<b>abc</b>xyz<b>123</b>');
  });

  it('returns a string with the specified overlapping words bolded correctly', () => {
    const result = addBoldTags('aaabbcc', ['aaa', 'aab', 'bc']);
    expect(result).toEqual('<b>aaabbc</b>c');
  });
});
