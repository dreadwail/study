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

type ChunkArrayOptions<T> = {
  arr: T[];
  chunkSize: number;
  mutuallyExclusive: boolean;
};

export const chunk = <T>({ arr, chunkSize, mutuallyExclusive }: ChunkArrayOptions<T>): T[][] => {
  if (chunkSize < 1) {
    return [];
  }
  const chunks = [];
  const step = mutuallyExclusive ? chunkSize : 1;
  for (let startingIndex = 0; startingIndex <= arr.length - chunkSize; startingIndex += step) {
    const currentChunk = arr.slice(startingIndex, startingIndex + chunkSize);
    chunks.push(currentChunk);
  }
  return chunks;
};
