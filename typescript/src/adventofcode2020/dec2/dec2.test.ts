import { countValidLengthPasswords, countValidPositionPasswords } from './dec2';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('dec2 Susanna', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.susanna.txt');
    input = readRows(filePath);
  });

  it('should return how many valid passwords are in the data set', () => {
    expect(countValidLengthPasswords(input)).toEqual(666);
  });
});

describe('dec2 Ben', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.ben.txt');
    input = readRows(filePath);
  });

  it('should return how many valid passwords are in the data set if measured by length', () => {
    expect(countValidLengthPasswords(input)).toEqual(622);
  });

  it('should return how many valid passwords are in the data set if measured by positions', () => {
    expect(countValidPositionPasswords(input)).toEqual(263);
  });
});
