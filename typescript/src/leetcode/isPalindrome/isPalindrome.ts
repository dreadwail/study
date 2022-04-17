export const isPalindrome = (input: string): boolean => {
  const inputLowerCase = input.toLowerCase();
  const inputSanitized = inputLowerCase.replace(/[^a-zA-Z0-9]/g, '');

  for (let i = 0; i < inputSanitized.length / 2; i += 1) {
    const charFront = inputSanitized[i];
    const charBack = inputSanitized[inputSanitized.length - i - 1];
    if (charFront !== charBack) {
      return false;
    }
  }

  return true;
};
