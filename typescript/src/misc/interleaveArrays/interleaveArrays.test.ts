import { interleaveArrays } from './interleaveArrays';

describe('interleaveArrays', () => {
  it('correctly interleaves the sample input', () => {
    const input = [[4, 8], [7, 3, 2], [1]];
    const output = interleaveArrays(input);

    expect(output).toEqual([4, 7, 1, 8, 3, 2]);
  });

  it('correctly interleaves with empty arrays present', () => {
    const input = [[4, 8], [], [1]];
    const output = interleaveArrays(input);

    expect(output).toEqual([4, 1, 8]);
  });

  it('correctly interleaves with only empty arrays', () => {
    const input = [[], [], []];
    const output = interleaveArrays(input);

    expect(output).toEqual([]);
  });
});
