import { determineHighestSeatId } from './dec5';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('dec5 Ben', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.ben.txt');

    input = readRows(filePath);
  });

  it('should find the highest seat id', () => {
    expect(determineHighestSeatId(input)).toEqual(987);
  });
});
