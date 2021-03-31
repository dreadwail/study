import { Node } from 'support/trees';

const buildParents = (parent: Node<number>, parents: Map<Node<number>, Node<number>>) => {
  if (parent.left) {
    parents.set(parent.left, parent);
    buildParents(parent.left, parents);
  }
  if (parent.right) {
    parents.set(parent.right, parent);
    buildParents(parent.right, parents);
  }
};

export const lowestCommonAncestor = (
  root: Node<number> | null,
  p: Node<number> | null,
  q: Node<number> | null
): Node<number> | null => {
  if (!root || !p || !q) {
    return null;
  }

  const parents = new Map<Node<number>, Node<number>>();
  buildParents(root, parents);

  const pPath: Node<number>[] = [];
  let pPointer: Node<number> | undefined = p;

  while (pPointer) {
    pPath.push(pPointer);
    pPointer = parents.get(pPointer);
  }

  const pPathSet = new Set(pPath);

  let qPointer: Node<number> | undefined = q;

  while (qPointer) {
    if (pPathSet.has(qPointer)) {
      return qPointer;
    }
    qPointer = parents.get(qPointer);
  }

  return null;
};
