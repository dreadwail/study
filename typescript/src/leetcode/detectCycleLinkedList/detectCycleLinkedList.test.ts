import { Node } from 'support/lists';
import { hasCycle } from './detectCycleLinkedList';

describe('hasCycle', () => {
  it('returns true when a cycle exists in the input list', () => {
    const head = new Node(3);
    const cycleOrigin = new Node(2);
    head.next = cycleOrigin;
    cycleOrigin.next = new Node(0, new Node(-4, cycleOrigin));

    expect(hasCycle(head)).toBe(true);
  });

  it('returns true when the tail connects to the head in the input list', () => {
    const head = new Node(1);
    head.next = new Node(2, head);

    expect(hasCycle(head)).toBe(true);
  });

  it('returns false when there is no cycle in the input list', () => {
    const head = new Node(1, new Node(2, new Node(3)));

    expect(hasCycle(head)).toBe(false);
  });

  it('returns false for a single node input list', () => {
    const head = new Node(1);

    expect(hasCycle(head)).toBe(false);
  });

  it('returns true when the head connects to itself', () => {
    const head = new Node(1);
    head.next = head;

    expect(hasCycle(head)).toBe(true);
  });
});
