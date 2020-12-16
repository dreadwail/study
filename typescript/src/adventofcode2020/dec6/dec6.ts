const getPersonYesAnswers = (person: string): string[] => person.split('');

const countUnionedGroupYesAnswers = (group: string): number => {
  const people = group.split('\n');

  const rawAnswers = people.reduce<string[]>((groupAnswers, person) => {
    return [...groupAnswers, ...getPersonYesAnswers(person)];
  }, []);

  const answers = new Set(rawAnswers);
  return answers.size;
};

const intersection = (arr1: string[], arr2: string[]): string[] => {
  const arr1set = new Set(arr1);
  return arr2.filter((item) => arr1set.has(item));
};

const countIntersectedGroupYesAnswers = (group: string): number => {
  const people = group.split('\n');

  const initial = getPersonYesAnswers(people[0] || '');

  const commons = people.reduce<string[]>((commonAnswers, person) => {
    const personAnswers = getPersonYesAnswers(person);
    return intersection(personAnswers, commonAnswers);
  }, initial);

  return commons.length;
};

const countGroupsAnswers = (input: string, computeFunc: (group: string) => number): number => {
  const groups = input.split('\n\n');

  return groups.reduce((total, group) => {
    return total + computeFunc(group);
  }, 0);
};

export const countUnionedYesAnswers = (input: string): number => countGroupsAnswers(input, countUnionedGroupYesAnswers);

export const countIntersectedYesAnswers = (input: string): number =>
  countGroupsAnswers(input, countIntersectedGroupYesAnswers);
