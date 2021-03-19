import { countTrees, multiplyTreeCounts } from './dec3';
import { readRows } from 'support/files';
import { resolve } from 'path';

describe('dec3 Dreadwail', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.dreadwail.txt');
    input = readRows(filePath);
  });

  it('counts the number of trees in the slope', () => {
    expect(countTrees(input, { x: 3, y: 1 })).toEqual(211);
  });

  it('computes the product of trees for a set of slopes', () => {
    const product = multiplyTreeCounts(input, [
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 5, y: 1 },
      { x: 7, y: 1 },
      { x: 1, y: 2 },
    ]);

    expect(product).toEqual(3584591857);
  });
});

describe('dec3 susanna', () => {
  let input: string[];

  beforeEach(() => {
    const filePath = resolve(__dirname, './input.susanna.txt');
    input = readRows(filePath);
  });

  it('counts the number of trees in the slope', () => {
    expect(countTrees(input, { x: 3, y: 1 })).toEqual(282);
  });

  it('computes the product of trees for a set of slopes', () => {
    const product = multiplyTreeCounts(input, [
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 5, y: 1 },
      { x: 7, y: 1 },
      { x: 1, y: 2 },
    ]);

    expect(product).toEqual(958815792);
  });
});
