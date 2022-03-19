export type Value = number | string;

export class Node<T extends Value> {
  value: T;
  connections: Record<T, Node<T>>;

  constructor(value: T) {
    this.value = value;
    this.connections = {} as Record<T, Node<T>>;
  }

  connectTo(node: Node<T>): void {
    this.connections[node.value] = node;
  }
}
