const minPathSumRecursive = (grid: number[][], x: number, y: number): number => {
  const destinationX = grid[0].length - 1;
  const destinationY = grid.length - 1;
  const valueHere = grid[y][x];

  if (x === destinationX && y === destinationY) {
    return valueHere;
  }

  const isDownPossible = y + 1 < grid.length;
  const isRightPossible = x + 1 < grid[0].length;

  const costs: number[] = [];

  if (isDownPossible) {
    costs.push(minPathSumRecursive(grid, x, y + 1));
  }
  if (isRightPossible) {
    costs.push(minPathSumRecursive(grid, x + 1, y));
  }

  return valueHere + Math.min(...costs);
};

export const minPathSum = (grid: number[][]): number => minPathSumRecursive(grid, 0, 0);
