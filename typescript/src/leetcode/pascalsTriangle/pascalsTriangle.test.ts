import { generate } from './pascalsTriangle';

describe('generate', () => {
  it('returns the correct triangle for 0', () => {
    const triangle = generate(0);

    expect(triangle).toEqual([]);
  });

  it('returns the correct triangle for 1', () => {
    const triangle = generate(1);

    expect(triangle).toEqual([[1]]);
  });

  it('returns the correct triangle for 5', () => {
    const triangle = generate(5);

    expect(triangle).toEqual([
      [1],
      [1,1],
      [1,2,1],
      [1,3,3,1],
      [1,4,6,4,1]
    ]);
  });
});
