type PasswordData = {
  readonly num1: number;
  readonly num2: number;
  readonly requiredLetter: string;
  readonly passwordCharacters: string[];
};

const parsePasswordData = (data: string): PasswordData => {
  const [range, letterWithColon, password] = data.split(' ');
  const [minString, maxString] = range.split('-');
  const requiredLetter = letterWithColon[0];

  return {
    num1: parseInt(minString),
    num2: parseInt(maxString),
    requiredLetter,
    passwordCharacters: password.split(''),
  };
};

const extractPasswordDatas = (datas: string[]): PasswordData[] => datas.map(parsePasswordData);

export const countValidLengthPasswords = (datas: string[]): number =>
  extractPasswordDatas(datas).reduce((validCount, { num1: min, num2: max, requiredLetter, passwordCharacters }) => {
    const countOfRequiredCharacter = passwordCharacters.filter((char) => char === requiredLetter).length;
    if (countOfRequiredCharacter >= min && countOfRequiredCharacter <= max) {
      return validCount + 1;
    }
    return validCount;
  }, 0);

export const countValidPositionPasswords = (datas: string[]): number =>
  extractPasswordDatas(datas).reduce((validCount, { num1, num2, requiredLetter, passwordCharacters }) => {
    const index1 = num1 - 1;
    const index2 = num2 - 1;

    const candidate1 = passwordCharacters[index1];
    const candidate2 = passwordCharacters[index2];
    const matches = [candidate1, candidate2].filter((candidate) => candidate === requiredLetter);
    if (matches.length === 1) {
      return validCount + 1;
    }
    return validCount;
  }, 0);
