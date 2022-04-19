export const isMatch = (input: string, pattern: string): boolean => {
  let inputIndex = 0;
  let patternIndex = 0;

  while (inputIndex < input.length) {
    const inputChar = input[inputIndex];
    const patternChar = pattern[patternIndex];

    if (patternChar === '*') {
      const patternEndChar = pattern[patternIndex + 1];

      while (input[inputIndex] !== patternEndChar) {
        inputIndex += 1;
      }
      patternIndex += 1;
    } else if (patternChar === inputChar) {
      inputIndex += 1;
      patternIndex += 1;
    } else {
      return false;
    }
  }

  return patternIndex === pattern.length;
};
