/*
The solution below is horrid for big-o and will exceed memory capacity if we
go to high above whats seen in the unit tests.

A better solution would be to use a permutation builder or build a trie. This
is an excercise for the future.
*/

const solutionToString = (solution: number[]): string => solution.join('');
const stringToSolution = (str: string): number[] => str.split('').map((char) => parseInt(char, 10));

export const climbStairs = (stepCount: number): number => {
  const candidates = new Set<string>(['']);

  let forkables = [...candidates].map(stringToSolution);

  let stepIndex = 0;

  while (stepIndex < stepCount) {
    forkables = [...candidates]
      .map(stringToSolution)
      .filter((candidate) => candidate.reduce((sum, steps) => sum + steps, 0) < stepCount);

    const oneStepForks = forkables.map((forkable) => [...forkable]);
    oneStepForks.forEach((fork) => fork.push(1));

    const twoStepForks = forkables.map((forkable) => [...forkable]);
    twoStepForks.forEach((fork) => fork.push(2));

    [...oneStepForks, ...twoStepForks].forEach((fork) => candidates.add(solutionToString(fork)));

    stepIndex += 1;
  }

  const validSolutions = [...candidates]
    .map(stringToSolution)
    .filter((solution) => solution.reduce((sum, step) => sum + step, 0) === stepCount);
  return validSolutions.length;
};
