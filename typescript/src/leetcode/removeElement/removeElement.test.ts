import { removeElement } from './removeElement';

describe.each([
  ['empty input', [], 0, 0, []],
  ['single input', [1], 1, 0, [1]],
  ['example 1', [3, 2, 2, 3], 3, 2, [2, 2, expect.anything(), expect.anything()]],
  [
    'example 2',
    [0, 1, 2, 2, 3, 0, 4, 2],
    2,
    5,
    [0, 1, 4, 0, 3, expect.anything(), expect.anything(), expect.anything()],
  ],
])('removeElement', (what, nums, val, expectedReturn, expectedArray) => {
  it(`returns the correct value for ${what}`, () => {
    const numsCopy = [...nums];
    expect(removeElement(numsCopy, val)).toEqual(expectedReturn);
  });

  it(`correctly restructures the array in-place for ${what}`, () => {
    const numsCopy = [...nums];
    removeElement(numsCopy, val);
    expect(numsCopy).toEqual(expectedArray);
  });
});
