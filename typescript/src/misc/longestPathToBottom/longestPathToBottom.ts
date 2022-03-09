export const findLongestPathLength = (grid: string[][]): number => {
  const cellMaxPathLengths: number[][] = [];

  for (let y = 0; y < grid.length; y += 1) {
    const row = grid[y];

    const rowMaxLengthsTravellingRight: number[] = new Array(row.length).fill(0);

    for (let x = 0; x < row.length; x += 1) {
      const cell = row[x];

      if (cell === undefined || cell === '#') {
        rowMaxLengthsTravellingRight[x] = 0;
      } else {
        const maxLengthAbove = y === 0 ? 0 : cellMaxPathLengths[y - 1][x];
        const maxLengthLeft = x === 0 ? 0 : rowMaxLengthsTravellingRight[x - 1];

        rowMaxLengthsTravellingRight[x] = 1 + Math.max(maxLengthAbove, maxLengthLeft);
      }
    }

    const rowMaxLengthsTravellingLeft: number[] = new Array(row.length).fill(0);

    for (let x = row.length - 1; x >= 0; x -= 1) {
      const cell = row[x];

      if (cell === undefined || cell === '#') {
        rowMaxLengthsTravellingLeft[x] = 0;
      } else {
        const maxLengthAbove = y === 0 ? 0 : cellMaxPathLengths[y - 1][x];
        const maxLengthRight = x === row.length - 1 ? 0 : rowMaxLengthsTravellingLeft[x + 1];

        rowMaxLengthsTravellingLeft[x] = 1 + Math.max(maxLengthAbove, maxLengthRight);
      }
    }

    const rowMaxLengths: number[] = new Array(row.length).fill(0);

    for (let i = 0; i < rowMaxLengths.length; i += 1) {
      rowMaxLengths[i] = Math.max(rowMaxLengthsTravellingLeft[i], rowMaxLengthsTravellingRight[i]);
    }

    cellMaxPathLengths.push(rowMaxLengths);
  }

  return Math.max(...cellMaxPathLengths[cellMaxPathLengths.length - 1]);
};
