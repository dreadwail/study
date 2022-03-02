export const minJumps = (arr: number[]) => {
  let currentIndex = 0;
  let stepsTaken = 0;

  while (currentIndex < arr.length - 1) {
    const maxStepsFromHere = arr[currentIndex];
    if (maxStepsFromHere === 0) {
      return -1;
    }

    const maxIndexFromHere = Math.min(currentIndex + maxStepsFromHere, arr.length - 1);
    currentIndex = maxIndexFromHere;
    stepsTaken += 1;
  }

  return stepsTaken;
};
