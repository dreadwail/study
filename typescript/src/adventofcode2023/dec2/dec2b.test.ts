import { sumOfMinimumCubePowers } from './dec2b';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('', () => {
  it('correctly computes the sum of powers of cube color minimums', () => {
    const exampleRows = [
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
      'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
    ];
    const sum = sumOfMinimumCubePowers(exampleRows);
    expect(sum).toEqual(2286);
  });

  it('correctly computes the sum of powers of cube color minimums from the input file', () => {
    const filePath = resolve(__dirname, './input.txt');
    const input = readRows(filePath);
    const sum = sumOfMinimumCubePowers(input);
    expect(sum).toEqual(76008);
  });
});
