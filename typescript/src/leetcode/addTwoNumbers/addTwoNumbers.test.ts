import { addTwoNumbers, listToNumber, ListNode } from './addTwoNumbers';

describe('addTwoNumbers', () => {
  it('returns the correct answer for example 1', () => {
    const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
    const actual = addTwoNumbers(list1, list2);

    expect(listToNumber(actual)).toEqual(listToNumber(expected));
  });

  it('returns the correct answer for example 2', () => {
    const list1 = new ListNode(0);
    const list2 = new ListNode(0);
    const expected = new ListNode(0);
    const actual = addTwoNumbers(list1, list2);

    expect(listToNumber(actual)).toEqual(listToNumber(expected));
  });

  it('returns the correct answer for example 3', () => {
    const list1 = new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
    );
    const list2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const expected = new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))
      )
    );
    const actual = addTwoNumbers(list1, list2);

    expect(listToNumber(actual)).toEqual(listToNumber(expected));
  });
});
