import { minJumps } from './minJumps';

describe('minJumps', () => {
  it.each([
    [3, [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]],
    [2, [1, 4, 3, 2, 6, 7]],
    [-1, [1, 0, 3, 2, 6, 7]],
  ])('returns %i given array %p of size %i', (expected, arr) => {
    expect(minJumps(arr)).toEqual(expected);
  });
});
