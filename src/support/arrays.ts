type GenerateSequenceOptions = {
  readonly max: number;
  readonly inclusive: boolean;
  readonly startsAt: number;
};

// switch to generator
export const generateSequence = ({ max, startsAt, inclusive }: GenerateSequenceOptions) => {
  if (max < startsAt) {
    return [];
  }
  const length = inclusive ? max + 1 - startsAt : max - startsAt;
  return Array.from(Array(length).keys()).map((val) => startsAt + val);
};
