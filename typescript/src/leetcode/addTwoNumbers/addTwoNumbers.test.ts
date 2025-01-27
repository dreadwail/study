import { Node } from 'support/lists';
import { addTwoNumbers, listToNumber } from './addTwoNumbers';

describe('listToNumber', () => {
  it('returns the correct total for a single-digit list', () => {
    const list = new Node<number>(4);
    const result = listToNumber(list);
    expect(result).toEqual(4);
  });

  it('returns the correct total for a multi-digit list', () => {
    const list = new Node<number>(1, new Node<number>(2, new Node<number>(3)));
    const result = listToNumber(list);
    expect(result).toEqual(321);
  });
});

describe('addTwoNumbers', () => {
  it('returns the correct answer for example 1', () => {
    const list1 = new Node(2, new Node(4, new Node(3)));
    const list2 = new Node(5, new Node(6, new Node(4)));
    const expected = new Node(7, new Node(0, new Node(8)));
    const actual = addTwoNumbers(list1, list2);
    expect(listToNumber(actual)).toEqual(listToNumber(expected));
  });

  it('returns the correct answer for example 2', () => {
    const list1 = new Node(0);
    const list2 = new Node(0);
    const expected = new Node(0);
    const actual = addTwoNumbers(list1, list2);
    expect(listToNumber(actual)).toEqual(listToNumber(expected));
  });

  it('returns the correct answer for example 3', () => {
    const list1 = new Node(9, new Node(9, new Node(9, new Node(9, new Node(9, new Node(9, new Node(9)))))));
    const list2 = new Node(9, new Node(9, new Node(9, new Node(9))));
    const expected = new Node(
      8,
      new Node(9, new Node(9, new Node(9, new Node(0, new Node(0, new Node(0, new Node(1)))))))
    );
    const actual = addTwoNumbers(list1, list2);
    expect(listToNumber(actual)).toEqual(listToNumber(expected));
  });
});
