type PasswordData = {
  min: number;
  max: number;
  requiredLetter: string;
  password: string;
};

const parsePasswordData = (data: string): PasswordData => {
  const [range, letterWithColon, password] = data.split(' ');
  const [minString, maxString] = range.split('-');
  const requiredLetter = letterWithColon[0];

  return {
    min: parseInt(minString),
    max: parseInt(maxString),
    requiredLetter,
    password,
  };
};

export const countValidPasswords = (datas: string[]): number =>
  datas.reduce((validCount, currentData) => {
    const { min, max, requiredLetter, password } = parsePasswordData(currentData);
    const passwordCharacters = password.split('');
    const countOfRequiredCharacter = passwordCharacters.filter((char) => char === requiredLetter).length;
    if (countOfRequiredCharacter >= min && countOfRequiredCharacter <= max) {
      return validCount + 1;
    }
    return validCount;
  }, 0);
