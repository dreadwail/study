import { lowestCommonAncestor } from './lowestCommonAncestor';
import { Node } from 'support/trees';

describe('lowestCommonAncestor', () => {
  it('returns the correct answer for example 1', () => {
    const three = new Node(3);
    const five = new Node(5);
    const one = new Node(1);
    const six = new Node(6);
    const two = new Node(2);
    const zero = new Node(0);
    const eight = new Node(8);
    const seven = new Node(7);
    const four = new Node(4);

    three.left = five;
    three.right = one;

    five.left = six;
    five.right = two;

    one.left = zero;
    one.right = eight;

    two.left = seven;
    two.right = four;

    expect(lowestCommonAncestor(three, five, one)).toEqual(three);
  });
});
