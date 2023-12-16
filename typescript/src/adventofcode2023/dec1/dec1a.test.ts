import { sumCalibrationValues } from './dec1a';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('dec1a', () => {
  it('correctly computes the sum of all calibration values', () => {
    const input = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
    const result = sumCalibrationValues(input);
    expect(result).toEqual(142);
  });

  it('correctly computes the sum of all calibration values in the input file', () => {
    const filePath = resolve(__dirname, './input.txt');
    const input = readRows(filePath);
    const result = sumCalibrationValues(input);
    expect(result).toEqual(54304);
  });
});
