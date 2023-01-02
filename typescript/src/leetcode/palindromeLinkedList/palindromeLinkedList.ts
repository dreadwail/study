import { Node } from 'support/lists';

const reverseCopy = <T>(source: Node<T>): Node<T> => {
  const copy = new Node<T>(source.value);

  let sourcePointer: Node<T> = source;
  let copyPointer: Node<T> = copy;

  while (sourcePointer.next) {
    copyPointer.value = sourcePointer.value;
    copyPointer.next = new Node<T>(sourcePointer.next.value);

    sourcePointer = sourcePointer.next;
    copyPointer = copyPointer.next;
  }

  let previous: Node<T> | null = null;
  let current: Node<T> | null = copy;

  while (current) {
    const oldNext: Node<T> | null = current.next;

    current.next = previous;

    previous = current;
    current = oldNext;
  }

  return previous as Node<T>;
};

export const isPalindrome = <T>(head: Node<T> | null): boolean => {
  if (!head) {
    return false;
  }
  if (!head.next) {
    return true;
  }

  const reversed = reverseCopy(head);

  let pointer: Node<T> | null = head;
  let reversedPointer: Node<T> | null = reversed;

  while (pointer && reversedPointer) {
    if (pointer.value !== reversedPointer.value) {
      return false;
    }
    pointer = pointer.next;
    reversedPointer = reversedPointer.next;
  }

  if ((pointer && !reversedPointer) || (!pointer && reversedPointer)) {
    return false;
  }

  return true;
};
