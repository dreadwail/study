import { sumOfGearRatios } from './dec3b';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('sumOfGearRatios', () => {
  it('correctly computes the sume of all gear ratios', () => {
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
    const sum = sumOfGearRatios(input);
    expect(sum).toEqual(467835);
  });

  it('correctly computes the sum of all gear ratios in the input file', () => {
    const filePath = resolve(__dirname, './input.txt');
    const input = readRows(filePath);
    const sum = sumOfGearRatios(input);
    expect(sum).toEqual(81939900);
  });
});
