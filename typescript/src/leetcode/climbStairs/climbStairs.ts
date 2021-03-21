/*
Input: n = 3
Output: 3

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

[1]
[2]

[1, 1]
[1, 2]
[2, 1]
[2, 2]

[1, 1, 1]
[1, 1, 2]
[1, 2, 1]
[1, 2, 2]
[2, 1, 1]
[2, 1, 2]
[2, 2, 1]
[2, 2, 2]

(2 ^ size)
*/

export const climbStairs = (stairStepsCount: number): number => {
  const permutations: number[][] = [];

  for (let permutationSize = 1; permutationSize <= stairStepsCount; permutationSize += 1) {
    const permutationsOfThisSize: number[][] = [];

    for (let index = 0; index < permutationSize; index += 1) {
      for (let choice = 1; choice <= 2; choice += 1) {
        //
      }
    }

    permutationsOfThisSize.forEach((permutation) => {
      permutations.push(permutation);
    });
  }

  const validPermutations = permutations.filter((permutation) => {
    const stepsTaken = permutation.reduce((sum, step) => sum + step);
    return stepsTaken === stairStepsCount;
  });

  return validPermutations.length;
};
