class ListNode {
  value: number;
  next?: ListNode;

  constructor(value: number, next?: ListNode) {
    this.value = value;
    this.next = next;
  }

  values(): number[] {
    const out: number[] = [];
    let current: ListNode | undefined = this;

    while (current) {
      out.push(current.value);
      current = current.next;
    }

    return out;
  }
}

export const arrayToLinkedList = (nums: number[]): ListNode | undefined => {
  const nodes = nums.map((num) => new ListNode(num));
  nodes.forEach((node, index, allNodes) => {
    const next = allNodes[index + 1];
    node.next = next;
  });
  return nodes[0];
};

export const reverseLinkedList = (head: ListNode | undefined): ListNode | undefined => {
  if (!head) {
    return undefined;
  }

  let previous: ListNode | undefined = undefined;
  let current: ListNode | undefined = head;

  while (current) {
    const oldNext: ListNode | undefined = current.next;

    current.next = previous;

    previous = current;
    current = oldNext;
  }

  return previous;
};
