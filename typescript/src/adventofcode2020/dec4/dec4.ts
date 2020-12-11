type ValidationRule = (value: string) => boolean;

type ValidationRules = {
  [key: string]: ValidationRule;
};

const requiredAttributes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const isPassportValid = (data: string, validationRules: ValidationRules) => {
  const dataPoints = data.split(/\s/);
  const attributesAndValues: { [key: string]: string } = dataPoints.reduce((memo, dataPoint) => {
    const [attribute, value] = dataPoint.split(':');
    return {
      ...memo,
      [attribute]: value,
    };
  }, {});
  const allRequiredAttributesPresent = requiredAttributes.every((attribute) => attributesAndValues[attribute]);
  if (!allRequiredAttributesPresent) {
    return false;
  }
  return Object.keys(validationRules).every((attribute) => {
    const value = attributesAndValues[attribute];
    const rule = validationRules[attribute];
    return rule(value);
  });
};

export const countValidPassports = (input: string, validationRules: ValidationRules = {}): number => {
  const passports = input.split('\n\n');
  return passports.filter((passport) => isPassportValid(passport, validationRules)).length;
};
