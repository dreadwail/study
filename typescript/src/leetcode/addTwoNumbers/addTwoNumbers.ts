type Maybe<T> = T | null;

export const listToNumber = (list: Maybe<ListNode>): number => {
  let current: Maybe<ListNode> = list;

  let multiplier = 1;
  let out = 0;

  while (current) {
    out += multiplier * current.val;
    multiplier *= 10;
    current = current.next;
  }

  return out;
};

export class ListNode {
  val: number;
  next: Maybe<ListNode>;

  constructor(val?: number, next?: Maybe<ListNode>) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = (list1: Maybe<ListNode>, list2: Maybe<ListNode>): Maybe<ListNode> => {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let carry = 0;

  let list1pointer: Maybe<ListNode> = list1;
  let list2pointer: Maybe<ListNode> = list2;
  const outDigits: number[] = [];

  while (list1pointer || list2pointer) {
    const list1positionValue = list1pointer ? list1pointer.val : 0;
    const list2positionValue = list2pointer ? list2pointer.val : 0;

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

  const head = new ListNode(outDigits[0]);
  let current = head;

  for (let i = 1; i < outDigits.length; i += 1) {
    const digit = outDigits[i];
    current.next = new ListNode(digit);
    current = current.next;
  }

  return head;
};
