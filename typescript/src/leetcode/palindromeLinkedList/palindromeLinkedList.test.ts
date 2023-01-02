import { Node } from 'support/lists';
import { isPalindrome } from './palindromeLinkedList';

describe('isPalindrome', () => {
  it('returns true for a list with only 1 element', () => {
    const list = new Node(42);

    expect(isPalindrome(list)).toBe(true);
  });

  it('returns false for a list that is not a palindrome', () => {
    const list = new Node(42);
    list.next = new Node(12);

    expect(isPalindrome(list)).toBe(false);
  });

  it('returns true for a list that is a palindrome', () => {
    const first = new Node(10);
    const second = new Node(20);
    const third = new Node(10);

    first.next = second;
    second.next = third;

    expect(isPalindrome(first)).toBe(true);
  });
});
