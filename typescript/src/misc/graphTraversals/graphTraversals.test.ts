import { Node } from 'support/graphs';
import { traverseBreadthFirst, traverseDepthFirst } from './graphTraversals';

describe('traverseBreadthFirst', () => {
  it('returns the correct traversal for a single node graph', () => {
    const graph = new Node<number>(10);

    expect(traverseBreadthFirst(graph)).toEqual([10]);
  });

  it('returns the correct traversal for a 2 level graph', () => {
    const graph = new Node<number>(10);
    graph.connectTo(new Node(20));
    graph.connectTo(new Node(30));

    const validTraversals: number[][] = [
      [10, 20, 30],
      [10, 30, 20],
    ];

    expect(validTraversals).toContainEqual(traverseBreadthFirst(graph));
  });

  it('returns the correct traversal for a 3 level graph', () => {
    const graph = new Node<number>(10);

    const twenty = new Node<number>(20);
    const thirty = new Node<number>(30);

    graph.connectTo(twenty);
    graph.connectTo(thirty);

    const fourty = new Node<number>(40);
    const fifty = new Node<number>(50);

    twenty.connectTo(fourty);
    twenty.connectTo(fifty);

    const validTraversals: number[][] = [
      [10, 20, 30, 40, 50],
      [10, 20, 30, 50, 40],
      [10, 30, 20, 40, 50],
      [10, 30, 20, 50, 40],
    ];

    expect(validTraversals).toContainEqual(traverseBreadthFirst(graph));
  });
});

describe('traverseDepthFirst', () => {
  it('returns the correct traversal for a single node graph', () => {
    const graph = new Node<number>(10);

    expect(traverseDepthFirst(graph)).toEqual([10]);
  });

  it('returns the correct traversal for a 2 level graph', () => {
    const graph = new Node<number>(10);
    graph.connectTo(new Node(20));
    graph.connectTo(new Node(30));

    const validTraversals: number[][] = [
      [10, 20, 30],
      [10, 30, 20],
    ];

    expect(validTraversals).toContainEqual(traverseDepthFirst(graph));
  });

  it('returns the correct traversal for a 3 level graph', () => {
    const graph = new Node<number>(10);

    const twenty = new Node<number>(20);
    const thirty = new Node<number>(30);

    graph.connectTo(twenty);
    graph.connectTo(thirty);

    const fourty = new Node<number>(40);
    const fifty = new Node<number>(50);

    twenty.connectTo(fourty);
    twenty.connectTo(fifty);

    const validTraversals: number[][] = [
      [10, 20, 50, 40, 30],
      [10, 20, 40, 50, 30],
      [10, 30, 20, 50, 40],
      [10, 30, 20, 40, 50],
    ];

    expect(validTraversals).toContainEqual(traverseDepthFirst(graph));
  });
});
