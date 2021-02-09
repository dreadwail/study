import { Node } from 'support/lists';

export const listToNumber = (list: Node<number> | null): number => {
  let current: Node<number> | null = list;

  let multiplier = 1;
  let out = 0;

  while (current) {
    out += multiplier * current.value;
    multiplier *= 10;
    current = current.next;
  }

  return out;
};

export const addTwoNumbers = (list1: Node<number> | null, list2: Node<number> | null): Node<number> | null => {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let carry = 0;

  let list1pointer: Node<number> | null = list1;
  let list2pointer: Node<number> | null = list2;
  const outDigits: number[] = [];

  while (list1pointer || list2pointer) {
    const list1positionValue = list1pointer ? list1pointer.value : 0;
    const list2positionValue = list2pointer ? list2pointer.value : 0;

    const subtotal = list1positionValue + list2positionValue + carry;

    const digit = subtotal % 10;
    carry = subtotal >= 10 ? 1 : 0;

    outDigits.push(digit);

    list1pointer = list1pointer ? list1pointer.next : null;
    list2pointer = list2pointer ? list2pointer.next : null;
  }

  if (carry) {
    outDigits.push(carry);
  }

  if (outDigits.length === 0) {
    return null;
  }

  const head = new Node(outDigits[0]);
  let current = head;

  for (let i = 1; i < outDigits.length; i += 1) {
    const digit = outDigits[i];
    current.next = new Node(digit);
    current = current.next;
  }

  return head;
};
