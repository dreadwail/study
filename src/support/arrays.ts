type GenerateSequenceOptions = {
  readonly start: number;
  readonly end: number;
  readonly inclusive: boolean;
};

export const generateSequence = ({ start, end, inclusive }: GenerateSequenceOptions): number[] => {
  const endNormalized = inclusive ? end : end - 1;
  const result: number[] = [];
  for (let current = start; current <= endNormalized; current += 1) {
    result.push(current);
  }
  return result;
};
