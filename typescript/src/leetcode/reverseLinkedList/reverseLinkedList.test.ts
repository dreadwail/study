import { listToArray, arrayToList } from 'support/lists';
import { reverseLinkedList } from './reverseLinkedList';

describe('reverseLinkedList', () => {
  it('correctly reverses the sample input', () => {
    const list = arrayToList([1, 2, 3, 4, 5]);
    const reversed = reverseLinkedList(list);
    const reversedValues = reversed ? listToArray(reversed) : [];
    expect(reversedValues).toEqual([5, 4, 3, 2, 1]);
  });

  it('correctly reverses a single node list', () => {
    const list = arrayToList([1]);
    const reversed = reverseLinkedList(list);
    const reversedValues = reversed ? listToArray(reversed) : [];
    expect(reversedValues).toEqual([1]);
  });
});
