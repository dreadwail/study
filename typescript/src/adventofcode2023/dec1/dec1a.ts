const charCodeZero = '0'.charCodeAt(0);

const isDigit = (char: string): boolean => {
  const value = char.charCodeAt(0) - charCodeZero;
  return 0 <= value && value <= 9;
};

const parseCalibrationValue = (row: string): number => {
  const chars = row.split('');
  const first = chars.find(isDigit);
  const last = chars.findLast(isDigit);
  return parseInt(`${first}${last}`, 10) ?? 0;
};

export const sumCalibrationValues = (rows: string[]) =>
  rows.map(parseCalibrationValue).reduce((total, num) => total + num, 0);
