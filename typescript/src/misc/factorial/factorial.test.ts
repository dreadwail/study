import { factorialRecursive, factorialIterative, factorialRecursiveMemoized } from './factorial';

describe.each([factorialRecursive, factorialIterative, factorialRecursiveMemoized])('%p', (factorial) => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [10, 3628800],
  ])('calculates the factorial of %i to be %i', (n, expected) => {
    expect(factorial(n)).toEqual(expected);
  });
});
