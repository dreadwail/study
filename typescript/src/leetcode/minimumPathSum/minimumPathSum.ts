const cacheKeyFor = (x: number, y: number) => [x, y].join(',');

const minPathSumRecursive = (grid: number[][], x: number, y: number, cache: Record<string, number>): number => {
  const destinationX = grid[0].length - 1;
  const destinationY = grid.length - 1;
  const valueHere = grid[y][x];

  const cacheRead = () => cache[cacheKeyFor(x, y)];

  const cacheWrite = (value: number) => {
    cache[cacheKeyFor(x, y)] = value;
    return value;
  };

  const fromCache = cacheRead();
  if (fromCache != null) {
    return fromCache;
  }

  if (x === destinationX && y === destinationY) {
    return cacheWrite(valueHere);
  }

  const isDownPossible = y + 1 < grid.length;
  const isRightPossible = x + 1 < grid[0].length;

  const costs: number[] = [];

  if (isDownPossible) {
    costs.push(minPathSumRecursive(grid, x, y + 1, cache));
  }
  if (isRightPossible) {
    costs.push(minPathSumRecursive(grid, x + 1, y, cache));
  }

  const result = valueHere + Math.min(...costs);
  return cacheWrite(result);
};

export const minPathSum = (grid: number[][]): number => minPathSumRecursive(grid, 0, 0, {});
