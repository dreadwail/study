type Opener = '(' | '[' | '{';
type Closer = ')' | ']' | '}';

const isOpener = (character: string): character is Opener => ['(', '[', '{'].includes(character);

const matches: Record<Opener, Closer> = {
  '(': ')',
  '{': '}',
  '[': ']',
};

export const isValid = (input: string): boolean => {
  const openers: string[] = [];

  const characters = input.split('');

  for (let i = 0; i < characters.length; i += 1) {
    const character = characters[i];
    if (isOpener(character)) {
      openers.push(character);
    } else {
      if (openers.length === 0) {
        return false;
      }
      const openerToCheck = openers.pop() as Opener;
      const expectedCloser = matches[openerToCheck];
      const matched = expectedCloser === character;
      if (!matched) {
        return false;
      }
    }
  }

  if (openers.length > 0) {
    return false;
  }

  return true;
};
