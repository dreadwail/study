import validateSchema, { Schema, Value } from './validateSchema';

describe('validateSchema', () => {
  it('returns true when a number is given for a number schema', () => {
    expect(validateSchema('number', 5)).toBe(true);
  });

  it('returns false when a non-number is given for a number schema', () => {
    expect(validateSchema('number', '5')).toBe(false);
  });

  it('returns true when a string is given for a string schema', () => {
    expect(validateSchema('string', '5')).toBe(true);
  });

  it('returns false when a non-string is given for a string schema', () => {
    expect(validateSchema('string', 5)).toBe(false);
  });

  it('returns true when a boolean is given for a boolean schema', () => {
    expect(validateSchema('boolean', true)).toBe(true);
  });

  it('returns false when a non-boolean is given for a boolean schema', () => {
    expect(validateSchema('boolean', 5)).toBe(false);
  });

  it('returns true when array values match an array schema', () => {
    const schema: Schema = ['string'];
    const value: Value = ['hi', 'yes'];

    expect(validateSchema(schema, value)).toBe(true);
  });

  it('returns false when a non-array is given for an array schema', () => {
    const schema: Schema = ['string'];
    const value: Value = 42;

    expect(validateSchema(schema, value)).toBe(false);
  });

  it('returns false when array values dont match an array schema', () => {
    const schema: Schema = ['string'];
    const value: Value = [42, 'yes'];

    expect(validateSchema(schema, value)).toBe(false);
  });

  it('returns true when a single-level object matches a single-level object schema', () => {
    const schema: Schema = { foo: 'number', bar: 'string' };
    const value: Value = { foo: 42, bar: 'hello' };

    expect(validateSchema(schema, value)).toBe(true);
  });

  it('returns false when a single-level object does not match a single-level object schema', () => {
    const schema: Schema = { foo: 'number', bar: 'string' };
    const value: Value = { foo: 'nope', bar: 'hello' };

    expect(validateSchema(schema, value)).toBe(false);
  });

  it('returns true when a nested object matches a nested object schema', () => {
    const schema: Schema = { foo: 'number', bar: { stuff: 'string' } };
    const value: Value = { foo: 42, bar: { stuff: 'hello' } };

    expect(validateSchema(schema, value)).toBe(true);
  });

  it('returns false when a nested object does not match a nested object schema', () => {
    const schema: Schema = { foo: 'number', bar: { stuff: 'string' } };
    const value: Value = { foo: 42, bar: { stuff: 10 } };

    expect(validateSchema(schema, value)).toBe(false);
  });
});
