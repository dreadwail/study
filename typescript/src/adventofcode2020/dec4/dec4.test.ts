import { countValidPassports } from './dec4';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

const validateBetween = (value: string, min: number, max: number) => {
  const asYear = parseInt(value);
  return asYear >= min && asYear <= max;
};

const validationRules = {
  byr: (value: string) => validateBetween(value, 1920, 2002),
  iyr: (value: string) => validateBetween(value, 2010, 2020),
  eyr: (value: string) => validateBetween(value, 2020, 2030),
  hgt: (value: string) => {
    const units = value.slice(-2);
    const indexOfUnits = value.indexOf(units);
    const measurement = value.slice(0, indexOfUnits);
    if (units === 'cm') {
      return validateBetween(measurement, 150, 193);
    }
    if (units === 'in') {
      return validateBetween(measurement, 59, 76);
    }
    return false;
  },
  hcl: (value: string) => {
    if (value[0] !== '#') {
      return false;
    }
    const hex = value.slice(1);
    return /[0-9a-f]{6}/.test(hex);
  },
  ecl: (value: string) => validEyeColors.includes(value),
  pid: (value: string) => value.length === 9 && !isNaN(Number(value)),
};

describe('dec4 susanna', () => {
  let input: string;

  beforeEach(() => {
    const filePath = resolve(__dirname, './dec4.input.susanna.txt');
    input = readFileSync(filePath, 'utf8');
  });

  it('should count all valid passports required fields from the input', () => {
    expect(countValidPassports(input)).toEqual(213);
  });

  it('should count all valid passports required fields and valid data from the input', () => {
    expect(countValidPassports(input, validationRules)).toEqual(147);
  });
});

describe('dec4 ben', () => {
  let input: string;

  beforeEach(() => {
    const filePath = resolve(__dirname, './dec4.input.ben.txt');
    input = readFileSync(filePath, 'utf8');
  });

  it('should count all valid passports required fields from the input', () => {
    expect(countValidPassports(input)).toEqual(233);
  });

  it('should count all valid passports required fields and valid data from the input', () => {
    expect(countValidPassports(input, validationRules)).toEqual(111);
  });
});
