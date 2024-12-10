import { readRows } from 'support/files';
import { resolve } from 'path';
import { computeTotalDistance } from './dec1a';

describe('computeTotalDistance', () => {
  it('correctly computes the example', () => {
    const exampleData = `
      3   4
      4   3
      2   5
      1   3
      3   9
      3   3
    `;
    const exampleRows = exampleData.trim().split('\n');

    const result = computeTotalDistance(exampleRows);
    expect(result).toEqual(11);
  });

  it('correctly computes the provided input', () => {
    const filePath = resolve(__dirname, './input.txt');
    const rows = readRows(filePath);

    const result = computeTotalDistance(rows);
    expect(result).toEqual(2344935);
  });
});
