import { sumCalibrationValues } from './dec1b';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('dec1b', () => {
  it('correctly computes the sum of all calibration values', () => {
    const input = [
      'two1nine',
      'eightwothree',
      'abcone2threexyz',
      'xtwone3four',
      '4nineeightseven2',
      'zoneight234',
      '7pqrstsixteen',
    ];
    const result = sumCalibrationValues(input);
    expect(result).toEqual(281);
  });

  it('correctly computes the sum of all calibration values in the input file', () => {
    const filePath = resolve(__dirname, './input.txt');
    const input = readRows(filePath);
    const result = sumCalibrationValues(input);
    expect(result).toEqual(54418);
  });
});
