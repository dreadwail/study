import { readFileSync } from 'fs';

export const readRows = (path: string): string[] => {
  const rawInput = readFileSync(path, 'utf8');
  return rawInput.split('\n');
};
