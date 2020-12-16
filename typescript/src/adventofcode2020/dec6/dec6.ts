const getPersonYesAnswers = (person: string): string[] => person.split('');

const countGroupYesAnswers = (group: string): number => {
  const people = group.split('\n');

  const rawAnswers = people.reduce<string[]>((groupAnswers, person) => {
    return [...groupAnswers, ...getPersonYesAnswers(person)];
  }, []);

  const answers = new Set(rawAnswers);
  return answers.size;
};

export const countYesAnswers = (input: string): number => {
  const groups = input.split('\n\n');

  return groups.reduce((total, group) => {
    return total + countGroupYesAnswers(group);
  }, 0);
};
