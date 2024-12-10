export const computeTotalDistance = (lines: string[]) => {
  const normalizedLines = lines.map((line) => line.trim());
  const rows = normalizedLines.map((line) => line.split(/\s+/g));
  const rowsAsNumbers = rows.map(([left, right]) => [parseInt(left, 10), parseInt(right, 10)]);
  const leftList = rowsAsNumbers.map(([left]) => left).sort();
  const rightList = rowsAsNumbers.map(([, right]) => right).sort();

  return leftList.reduce((total, leftValue, index) => {
    const rightValue = rightList[index];
    const distanceHere = Math.abs(rightValue - leftValue);
    return total + distanceHere;
  }, 0);
};
