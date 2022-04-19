import { Node } from 'support/lists';

const getListLength = <T>(list: Node<T> | null): number => {
  let pointer: Node<T> | null = list;
  let length = 0;

  while (pointer) {
    length += 1;
    pointer = pointer.next;
  }

  return length;
};

const getNodeAt = <T>(list: Node<T> | null, seek: number): Node<T> | null => {
  let pointer: Node<T> | null = list;
  let index = 0;

  while (pointer && index < seek) {
    pointer = pointer.next;
    index += 1;
  }

  return pointer;
};

export const getIntersectionNode = <T>(head1: Node<T> | null, head2: Node<T> | null): Node<T> | null => {
  const list1Length = getListLength(head1);
  const list2Length = getListLength(head2);

  const lengthDifference = Math.abs(list1Length - list2Length);

  let pointer1: Node<T> | null = head1;
  let pointer2: Node<T> | null = head2;

  if (list1Length > list2Length) {
    pointer1 = getNodeAt(head1, lengthDifference);
  } else if (list2Length > list1Length) {
    pointer2 = getNodeAt(head2, lengthDifference);
  }

  while (pointer1 && pointer2) {
    if (pointer1 === pointer2) {
      return pointer1;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return null;
};
