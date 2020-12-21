import { determineHighestSeatId, findOpenSeat } from './dec5';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('dec5 Ben', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.ben.txt');

    input = readRows(filePath);
  });

  describe('determineHighestSeatId', () => {
    it('should find the highest seat id', () => {
      expect(determineHighestSeatId(input)).toEqual(987);
    });
  });

  describe('findOpenSeat', () => {
    it('should find the open seat', () => {
      expect(findOpenSeat(input)).toEqual(603);
    });
  });
});

describe('dec5 Susanna', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.susanna.txt');

    input = readRows(filePath);
  });

  describe('determineHighestSeatId', () => {
    it('should find the highest seat id', () => {
      expect(determineHighestSeatId(input)).toEqual(818);
    });
  });

  describe('findOpenSeat', () => {
    it('should find the open seat', () => {
      expect(findOpenSeat(input)).toEqual(559);
    });
  });
});
