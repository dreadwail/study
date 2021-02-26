export type Course = string;
export type PrereqAndCourse = [Course, Course];

type CourseInformation = {
  prereq?: Course;
  follow?: Course;
};

export const findHalfwayCourse = (input: PrereqAndCourse[]): Course => {
  const courseInformation = input.reduce<Record<Course, CourseInformation>>((mapping, [prereq, course]) => {
    mapping[prereq] = mapping[prereq] || {};
    mapping[prereq].follow = course;

    mapping[course] = mapping[course] || {};
    mapping[course].prereq = prereq;

    return mapping;
  }, {});

  const start = Object.keys(courseInformation).find((course) => !courseInformation[course].prereq);

  const path: Course[] = [];

  let current = start;
  while (current) {
    path.push(current);
    current = courseInformation[current].follow;
  }

  const halfwayIndex = Math.floor((path.length - 1) / 2);
  return path[halfwayIndex];
};
