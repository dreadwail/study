type ValueDescriptor = { value: number; text: string; needsPrefix?: boolean };

const valueDescriptors: ValueDescriptor[] = [
  { value: 1000000000, text: 'Billion', needsPrefix: true },
  { value: 1000000, text: 'Million', needsPrefix: true },
  { value: 1000, text: 'Thousand', needsPrefix: true },
  { value: 100, text: 'Hundred', needsPrefix: true },
  { value: 90, text: 'Ninety' },
  { value: 80, text: 'Eighty' },
  { value: 70, text: 'Seventy' },
  { value: 60, text: 'Sixty' },
  { value: 50, text: 'Fifty' },
  { value: 40, text: 'Forty' },
  { value: 30, text: 'Thirty' },
  { value: 20, text: 'Twenty' },
  { value: 19, text: 'Nineteen' },
  { value: 18, text: 'Eighteen' },
  { value: 17, text: 'Seventeen' },
  { value: 16, text: 'Sixteen' },
  { value: 15, text: 'Fifteen' },
  { value: 14, text: 'Fourteen' },
  { value: 13, text: 'Thirteen' },
  { value: 12, text: 'Twelve' },
  { value: 11, text: 'Eleven' },
  { value: 10, text: 'Ten' },
  { value: 9, text: 'Nine' },
  { value: 8, text: 'Eight' },
  { value: 7, text: 'Seven' },
  { value: 6, text: 'Six' },
  { value: 5, text: 'Five' },
  { value: 4, text: 'Four' },
  { value: 3, text: 'Three' },
  { value: 2, text: 'Two' },
  { value: 1, text: 'One' },
];

export const numberToWords = (num: number): string => {
  if (num === 0) {
    return 'Zero';
  }

  let remainingValue = num;

  const output: string[] = [];

  for (let index = 0; index < valueDescriptors.length; index += 1) {
    const descriptor = valueDescriptors[index];
    const howManyOfThese = Math.floor(remainingValue / descriptor.value);

    if (howManyOfThese > 0) {
      if (howManyOfThese > 1) {
        output.push(numberToWords(howManyOfThese));
      } else if (howManyOfThese === 1 && descriptor.needsPrefix) {
        output.push('One');
      }
      output.push(descriptor.text);

      const toRemove = howManyOfThese * descriptor.value;
      remainingValue -= toRemove;
    }
  }

  return output.join(' ');
};
