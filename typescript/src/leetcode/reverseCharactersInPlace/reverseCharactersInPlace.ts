export const reverseCharactersInPlace = (input: string[]): void => {
  for (let index = 0; index < input.length / 2; index += 1) {
    const indexLeft = index;
    const indexRight = input.length - 1 - index;

    const oldLeft = input[indexLeft];
    const oldRight = input[indexRight];

    input[indexLeft] = oldRight;
    input[indexRight] = oldLeft;
  }
};
