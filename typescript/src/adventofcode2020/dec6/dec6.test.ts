import { countIntersectedYesAnswers, countUnionedYesAnswers } from './dec6';
import { resolve } from 'path';
import { readFileSync } from 'fs';

describe('dec6 Ben', () => {
  let input: string;

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.ben.txt');
    input = readFileSync(filePath, 'utf8');
  });

  describe('countUnionedYesAnswers', () => {
    it('should count the number of questions answered yes', () => {
      expect(countUnionedYesAnswers(input)).toEqual(6782);
    });
  });

  describe('countIntersectedYesAnswers', () => {
    it('should count the number of common questions answered yes', () => {
      expect(countIntersectedYesAnswers(input)).toEqual(3596);
    });
  });
});
