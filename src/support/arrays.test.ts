import { generateSequence } from './arrays';

describe('generateSequence', () => {
  it.each([
    { max: 0, startsAt: 0, inclusive: false, expected: [] },
    { max: 1, startsAt: 0, inclusive: false, expected: [0] },
    { max: 2, startsAt: 0, inclusive: false, expected: [0, 1] },
    { max: 0, startsAt: 1, inclusive: false, expected: [] },
    { max: 1, startsAt: 1, inclusive: false, expected: [] },
    { max: 2, startsAt: 1, inclusive: false, expected: [1] },
    { max: 0, startsAt: 0, inclusive: true, expected: [0] },
    { max: 1, startsAt: 0, inclusive: true, expected: [0, 1] },
    { max: 2, startsAt: 0, inclusive: true, expected: [0, 1, 2] },
    { max: 0, startsAt: 1, inclusive: true, expected: [] },
    { max: 1, startsAt: 1, inclusive: true, expected: [1] },
    { max: 2, startsAt: 1, inclusive: true, expected: [1, 2] },
  ])('correctly generates for %p', ({ max, startsAt, inclusive, expected }) => {
    expect(generateSequence({ max, startsAt, inclusive })).toEqual(expected);
  });
});
