// Note: This is a fairly elaborate solution and the code isn't the cleanest
// due to it being solved under time pressures in an interview setting.

const charToValue = (char: string): number => char.charCodeAt(0) - '0'.charCodeAt(0);

const atoi = (input: string): number => {
  const characters = [];

  for (let index = 0; index < input.length; index += 1) {
    const charHere = input[index];

    if (charHere === '+' || charHere === '-') {
      if (characters.length > 0) {
        break;
      }
      characters.push(charHere);
    } else if (charHere === ' ') {
      if (characters.length > 0) {
        break;
      }
    } else {
      const valueHere = charToValue(charHere);

      if (valueHere >= 0 && valueHere <= 9) {
        characters.push(charHere);
      } else {
        break;
      }
    }
  }

  let currentMultiplier = 1;
  let sum = 0;

  for (let index = characters.length - 1; index >= 0; index -= 1) {
    const charHere = characters[index];

    if (charHere === '+' || charHere === '-') {
      if (index > 0) {
        return sum;
      }
      if (charHere === '-') {
        sum = sum * -1;
      }
    } else {
      const valueHere = charToValue(charHere);
      const toAddToSum = valueHere * currentMultiplier;

      currentMultiplier *= 10;
      sum += toAddToSum;
    }
  }

  return sum;
};

export default atoi;
