import { sumAllPartNumbers } from './dec3a';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('sumAllPartNumbers', () => {
  it('correctly computes the sume of all part numbers', () => {
    const input = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..',
    ];
    const sum = sumAllPartNumbers(input);
    expect(sum).toEqual(4361);
  });

  it('correctly computes the sume of all part numbers in the input file', () => {
    const filePath = resolve(__dirname, './input.txt');
    const input = readRows(filePath);
    const sum = sumAllPartNumbers(input);
    expect(sum).toEqual(537832);
  });
});
