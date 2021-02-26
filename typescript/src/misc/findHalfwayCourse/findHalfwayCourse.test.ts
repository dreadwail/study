import { PrereqAndCourse, findHalfwayCourse } from './findHalfwayCourse';

describe('findHalfwayCourse', () => {
  it.each([
    [
      'Data Structures',
      [
        ['Foundations of Computer Science', 'Operating Systems'],
        ['Data Structures', 'Algorithms'],
        ['Computer Networks', 'Computer Architecture'],
        ['Algorithms', 'Foundations of Computer Science'],
        ['Computer Architecture', 'Data Structures'],
        ['Software Design', 'Computer Networks'],
      ] as PrereqAndCourse[],
    ],
    [
      'Algorithms',
      [
        ['Data Structures', 'Algorithms'],
        ['Algorithms', 'Foundations of Computer Science'],
        ['Foundations of Computer Science', 'Logic'],
      ] as PrereqAndCourse[],
    ],
    ['Data Structures', [['Data Structures', 'Algorithms']] as PrereqAndCourse[]],
  ])('returns %s for %j', (expected, input) => {
    expect(findHalfwayCourse(input)).toEqual(expected);
  });
});
