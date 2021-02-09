import { Node } from 'support/lists';

export const reverseLinkedList = (head: Node<number>): Node<number> => {
  let previous: Node<number> | null = null;
  let current: Node<number> | null = head;

  while (current) {
    const oldNext: Node<number> | null = current.next;

    current.next = previous;

    previous = current;
    current = oldNext;
  }

  return previous as Node<number>;
};
