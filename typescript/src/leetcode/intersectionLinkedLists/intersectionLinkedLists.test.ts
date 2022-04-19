import { Node } from 'support/lists';
import { getIntersectionNode } from './intersectionLinkedLists';

describe('getIntersectionNode', () => {
  it('returns the intersection node of two linked lists that intersect, case 1', () => {
    const intersection = new Node(8, new Node(4, new Node(5)));

    const listA = new Node(4, new Node(1, intersection));
    const listB = new Node(5, new Node(6, new Node(1, intersection)));

    expect(getIntersectionNode(listA, listB)).toBe(intersection);
  });

  it('returns the intersection node of two linked lists that intersect, case 2', () => {
    const intersection = new Node(2, new Node(4));

    const listA = new Node(1, new Node(9, new Node(1, intersection)));
    const listB = new Node(3, intersection);

    expect(getIntersectionNode(listA, listB)).toBe(intersection);
  });

  it('returns null when there is no intersection of two provided linked lists', () => {
    const listA = new Node(2, new Node(6, new Node(4)));
    const listB = new Node(1, new Node(5));

    expect(getIntersectionNode(listA, listB)).toBeNull();
  });
});
