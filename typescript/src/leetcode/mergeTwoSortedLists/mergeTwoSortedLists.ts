import { Node } from 'support/lists';

export const mergeTwoSortedLists = (list1: Node<number> | null, list2: Node<number> | null): Node<number> | null => {
  if (!list1 && !list2) {
    return null;
  }
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let out: Node<number>;

  let list1Ptr: Node<number> | null = list1;
  let list2Ptr: Node<number> | null = list2;

  if (list1.value <= list2.value) {
    out = new Node<number>(list1.value);
    list1Ptr = list1Ptr.next;
  } else {
    out = new Node<number>(list2.value);
    list2Ptr = list2Ptr.next;
  }

  let outPtr: Node<number> | null = out;

  while (list1Ptr || list2Ptr) {
    if (list1Ptr && list2Ptr) {
      if (list1Ptr.value <= list2Ptr.value) {
        outPtr.next = new Node(list1Ptr.value);
        list1Ptr = list1Ptr.next;
        outPtr = outPtr.next;
      } else {
        outPtr.next = new Node(list2Ptr.value);
        list2Ptr = list2Ptr.next;
        outPtr = outPtr.next;
      }
    } else if (list1Ptr) {
      outPtr.next = new Node(list1Ptr.value);
      list1Ptr = list1Ptr.next;
      outPtr = outPtr.next;
    } else if (list2Ptr) {
      outPtr.next = new Node(list2Ptr.value);
      list2Ptr = list2Ptr.next;
      outPtr = outPtr.next;
    }
  }

  return out;
};
