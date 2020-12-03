// '2-8 t: pncmjxlvckfbtrjh',
// '8-9 l: lzllllldsl',
// '3-11 c: ccchcccccclxnkcmc',

/* const passwordData = {
  min: 2,
  max: 8,
  requiredLetter: 't',
  password: 'pncmjxlvckfbtrjh',
}
*/

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

export const countValidPasswords = (datas: string[]): number => {
  let validCount = 0;
  for (let i = 0; i < datas.length; i++) {
    const { min, max, requiredLetter, password } = parsePasswordData(datas[i]);
    const count = password.split('').filter((char) => char === requiredLetter).length;
    if (count >= min && count <= max) {
      validCount++;
    }
  }
  return validCount;
};
