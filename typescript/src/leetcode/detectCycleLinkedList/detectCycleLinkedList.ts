import { Node } from 'support/lists';

export const hasCycle = <T>(head: Node<T> | null): boolean => {
  if (!head) {
    return false;
  }
  if (head.next === head) {
    return true;
  }

  const seen = new Set<Node<T>>();
  seen.add(head);

  let current = head.next;

  while (current && current !== head) {
    if (seen.has(current)) {
      return true;
    }
    seen.add(current);
    current = current.next;
  }

  return current === head;
};
