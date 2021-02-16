export const generate = (num: number): number[][] => {
  if (num === 0) {
    return [];
  }

  const triangle: number[][] = [[1]];

  for (let rowIndex = 1; rowIndex < num; rowIndex += 1) {
    const itemCount = rowIndex + 1;

    const rowAbove = triangle[rowIndex - 1];
    const row: number[] = [];

    for (let i = 0; i < itemCount; i += 1) {
      const parent1 = rowAbove[i] || 0;
      const parent2 = rowAbove[i - 1] || 0;
      const valueHere = parent1 + parent2;
      row.push(valueHere);
    }

    triangle.push(row);
  }

  return triangle;
};

