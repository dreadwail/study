import atoi from './atoi';

describe('atoi', () => {
  it.each([
    [5, '5'],
    [25, '25'],
    [0, 'x15'],
    [15, '15x'],
    [15, ' 15'],
    [15, '15 '],
    [15, ' 15 '],
    [0, 'x 15'],
    [15, '15 x'],
    [15, '15 x 66'],
  ])('returns %i when given %p', (expected, input) => {
    expect(atoi(input)).toEqual(expected);
  });
});
