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

  it('should return how many valid passwords are in the data set if measured by positions', () => {
    expect(countValidPositionPasswords(input)).toEqual(670);
  });
});

describe('dec2 Dreadwail', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.dreadwail.txt');
    input = readRows(filePath);
  });

  it('should return how many valid passwords are in the data set if measured by length', () => {
    expect(countValidLengthPasswords(input)).toEqual(622);
  });

  it('should return how many valid passwords are in the data set if measured by positions', () => {
    expect(countValidPositionPasswords(input)).toEqual(263);
  });
});
