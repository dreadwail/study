import { singleNumber } from './singleNumber';

describe('singleNumber', () => {
  it('correctly handles the first sample input', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
  });

  it('correctly handles the second sample input', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
  });

  it('correctly handles an array with only 1 number', () => {
    expect(singleNumber([1])).toEqual(1);
  });
});
