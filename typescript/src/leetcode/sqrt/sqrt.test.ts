import { sqrt, sqrtNative } from './sqrt';

const variants: Record<string, (x: number) => number> = { sqrt, sqrtNative };

describe.each(Object.keys(variants))('%s', (funcName) => {
  it.each([
    [2, 4],
    [2, 8],
    [46339, 2147395599],
    [46340, 2147483647],
  ])('returns %i for input %i', (expected, input) => {
    const func = variants[funcName];
    expect(func(input)).toEqual(expected);
  });
});
