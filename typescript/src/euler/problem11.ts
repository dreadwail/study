const collectHorizontalCandidates = (grid: number[][], size: number): number[][] => {
  const candidates: number[][] = [];
  const firstRow = grid[0];
  for (let y = 0; y < grid.length; y += 1) {
    const row = grid[y];
    for (let x = 0; x <= firstRow.length - size; x += 1) {
      const set = row.slice(x, x + size);
      candidates.push(set);
    }
  }
  return candidates;
};

const collectVerticalCandidates = (grid: number[][], size: number): number[][] => {
  const candidates: number[][] = [];
  const firstRow = grid[0];
  for (let x = 0; x < firstRow.length; x += 1) {
    const column: number[] = [];
    for (let y = 0; y < grid.length; y += 1) {
      column.push(grid[y][x]);
    }
    for (let columnIndex = 0; columnIndex <= column.length - size; columnIndex += 1) {
      const set = column.slice(columnIndex, columnIndex + size);
      candidates.push(set);
    }
  }
  return candidates;
};

const collectForwardDiagonalCandidates = (grid: number[][], size: number): number[][] => {
  const candidates: number[][] = [];
  for (let startY = 0; startY <= grid.length - size; startY += 1) {
    const startYrow = grid[startY];
    for (let startX = size - 1; startX < startYrow.length; startX += 1) {
      const diagonal: number[] = [];
      let x = startX;
      let y = startY;
      while (diagonal.length < size) {
        diagonal.push(grid[y][x]);
        x -= 1;
        y += 1;
      }
      candidates.push(diagonal);
    }
  }
  return candidates;
};

export const collectBackwardDiagonalCandidates = (grid: number[][], size: number): number[][] => {
  const candidates: number[][] = [];
  for (let startY = 0; startY <= grid.length - size; startY += 1) {
    const startYrow = grid[startY];
    for (let startX = 0; startX <= startYrow.length - size; startX += 1) {
      const diagonal: number[] = [];
      let x = startX;
      let y = startY;
      while (diagonal.length < size) {
        diagonal.push(grid[y][x]);
        x += 1;
        y += 1;
      }
      candidates.push(diagonal);
    }
  }
  return candidates;
};

const calculateProductForSet = (numberSet: number[]): number =>
  numberSet.reduce((totalProduct, currentNumber) => totalProduct * currentNumber);

export const largestProductInGrid = (grid: number[][], size: number) => {
  const candidateSets: number[][] = [
    ...collectHorizontalCandidates(grid, size),
    ...collectVerticalCandidates(grid, size),
    ...collectForwardDiagonalCandidates(grid, size),
    ...collectBackwardDiagonalCandidates(grid, size),
  ];
  const products = candidateSets.map(calculateProductForSet);
  return Math.max(...products);
};
