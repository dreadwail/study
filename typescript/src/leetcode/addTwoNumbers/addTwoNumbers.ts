import { Node } from 'support/lists';

export const listToNumber = (list: Node<number>) => {
  let total = 0;
  let multiplier = 1;
  let current: Node<number> | null = list;

  while (current !== null) {
    total += current.value * multiplier;
    multiplier *= 10;
    current = current.next;
  }

  return total;
};

export const addTwoNumbers = (list1: Node<number>, list2: Node<number>): Node<number> => {
  let carry = 0;

  let list1Current: Node<number> | null = list1;
  let list2Current: Node<number> | null = list2;

  let list3: Node<number> | null = null;
  let list3Current: Node<number> | null = null;

  while (list1Current !== null || list2Current !== null) {
    const list1Digit = list1Current?.value ?? 0;
    const list2Digit = list2Current?.value ?? 0;

    const list3DigitRaw = list1Digit + list2Digit + carry;
    carry = list3DigitRaw > 9 ? 1 : 0;

    const list3Digit = list3DigitRaw % 10;
    const list3Node = new Node<number>(list3Digit);

    if (!list3) {
      list3 = list3Node;
      list3Current = list3Node;
    } else {
      list3Current!.next = list3Node;
      list3Current = list3Current!.next;
    }

    list1Current = list1Current?.next ?? null;
    list2Current = list2Current?.next ?? null;
  }

  if (carry > 0) {
    const carryNode = new Node<number>(carry);
    list3Current!.next = carryNode;
  }

  return list3!;
};
