import { reverseCharactersInPlace } from './reverseCharactersInPlace';

describe('reverseStringInPlace', () => {
  it('reverses the sample input', () => {
    const characters = ['h', 'e', 'l', 'l', 'o'];
    reverseCharactersInPlace(characters);
    expect(characters).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('reverses more complex inputs', () => {
    const characters = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseCharactersInPlace(characters);
    expect(characters).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
