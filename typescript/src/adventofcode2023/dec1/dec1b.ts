const charCodeZero = '0'.charCodeAt(0);

const wordToNumber: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const tryParseDigit = (chars: string[], atIndex: number): number | null => {
  const possibleNumberChar = chars[atIndex];
  const value = possibleNumberChar.charCodeAt(0) - charCodeZero;
  if (0 <= value && value <= 9) {
    return value;
  }

  const entry = Object.entries(wordToNumber).find(([word]) => {
    const lengthAvailable = chars.length - atIndex;
    const lengthRequired = word.length;
    if (lengthRequired > lengthAvailable) {
      return false;
    }

    const charsChars = chars.slice(atIndex, atIndex + word.length);
    return charsChars.every((char, index) => word[index] === char);
  });

  if (!entry) {
    return null;
  }

  const [, num] = entry;
  return num;
};

const parseCalibrationValue = (row: string): number => {
  const chars = row.split('');
  const digits: number[] = [];

  let firstIndex = 0;
  while (firstIndex < chars.length && digits.length === 0) {
    const value = tryParseDigit(chars, firstIndex);
    if (value) {
      digits.push(value);
      break;
    }
    firstIndex += 1;
  }

  let lastIndex = chars.length - 1;
  while (lastIndex >= 0 && digits.length < 2) {
    const value = tryParseDigit(chars, lastIndex);
    if (value) {
      digits.push(value);
      break;
    }
    lastIndex -= 1;
  }

  return parseInt(digits.join(''), 10) ?? 0;
};

export const sumCalibrationValues = (rows: string[]) =>
  rows.map(parseCalibrationValue).reduce((total, num) => total + num, 0);
