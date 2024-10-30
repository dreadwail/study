import { removeDuplicates } from './removeDuplicatesFromSortedArray2';

type InputValues = number[];
type OutputValues = (number | null)[];
type Result = number;
type TestCase = [InputValues, OutputValues, Result];

const testCases: TestCase[] = [
  [[1, 1, 1, 2, 2, 3], [1, 1, 2, 2, 3, null], 5],
  [[0, 0, 1, 1, 1, 1, 2, 3, 3], [0, 0, 1, 1, 2, 3, 3, null, null], 7],
  [[1, 1, 1, 1], [1, 1, null, null], 2],
  [[1, 1, 1], [1, 1, null], 2],
];

describe('removeDuplicates', () => {
  it.each(testCases)('modifies the array correctly when input was %p', (rawInput, expectedOutput, _) => {
    const values = [...rawInput];
    removeDuplicates(values);
    expect(values).toEqual(expectedOutput);
  });

  it.each(testCases)('returns the correct result when input was %p', (rawInput, _, expectedResult) => {
    const values = [...rawInput];
    const result = removeDuplicates(values);
    expect(result).toEqual(expectedResult);
  });
});
