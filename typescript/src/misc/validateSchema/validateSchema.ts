export type NumberSchema = 'number';
export type StringSchema = 'string';
export type BooleanSchema = 'boolean';
export type PrimitiveSchema = NumberSchema | StringSchema | BooleanSchema;
export type ArraySchema = [PrimitiveSchema];
export type Schema = PrimitiveSchema | ArraySchema | { [key: string]: Schema };

export type PrimitiveValue = number | string | boolean;
export type ArrayValue = PrimitiveValue[];
export type Value = PrimitiveValue | ArrayValue | { [key: string]: Value };

type Validator = (value: any) => boolean;
type Validators = { [key in PrimitiveSchema]: Validator };

const validators: Validators = {
  number: (value) => typeof value === 'number',
  string: (value) => typeof value === 'string',
  boolean: (value) => typeof value === 'boolean',
};

const validateSchema = (schema: Schema, value: Value): boolean => {
  if (Array.isArray(schema)) {
    if (!Array.isArray(value)) {
      return false;
    }

    const expectedType = schema[0];
    return value.every((val) => validateSchema(expectedType, val));
  }

  if (typeof schema === 'object') {
    if (Array.isArray(value)) {
      return false;
    }

    if (typeof value !== 'object') {
      return false;
    }

    return Object.keys(schema).reduce<boolean>((valid, key) => {
      if (!valid) {
        return false;
      }
      const schemaType = schema[key];
      const valueAtKey = value[key];

      return validateSchema(schemaType, valueAtKey);
    }, true);
  }

  const validator = validators[schema];
  return validator(value);
};

export default validateSchema;
