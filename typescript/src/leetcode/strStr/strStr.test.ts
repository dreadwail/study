import { strStrNative, strStr } from './strStr';

const variants: Record<string, (haystack: string, needle: string) => number> = {
  strStrNative,
  strStr,
};

type TestCase = [number, string, string];

const testCases: TestCase[] = [
  [2, 'll', 'hello'],
  [-1, 'bba', 'aaaaa'],
  [0, '', ''],
];

describe.each(Object.keys(variants))('%s', (funcName) => {
  it.each(testCases)('returns %i when looking for %s in %s', (expectedIndex, needle, haystack) => {
    const func = variants[funcName];
    const index = func(haystack, needle);
    expect(index).toEqual(expectedIndex);
  });
});
