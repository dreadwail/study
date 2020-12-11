const tree = '#';

type Slope = { x: number; y: number };

export const countTrees = (rows: string[], slope: Slope): number => {
  const mountain: string[][] = rows.map((row) => row.split(''));

  const rowLength = mountain[0].length;

  let x = 0;
  let y = 0;

  let treeCount = 0;

  while (y < mountain.length) {
    const cell = mountain[y][x];
    if (cell === tree) {
      treeCount += 1;
    }
    x = (x + slope.x) % rowLength;
    y = y + slope.y;
  }

  return treeCount;
};

export const multiplyTreeCounts = (rows: string[], slopes: Slope[]): number => {
  const treeCounts: number[] = slopes.map((slope) => countTrees(rows, slope));
  return treeCounts.reduce((product, current) => product * current);
};
