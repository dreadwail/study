import { countYesAnswers } from './dec6';
import { resolve } from 'path';
import { readFileSync } from 'fs';

describe('dec6 Ben', () => {
  let input: string;

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.ben.txt');
    input = readFileSync(filePath, 'utf8');
  });

  it('should count the number of questions answered yes', () => {
    expect(countYesAnswers(input)).toEqual(6782);
  });
});
