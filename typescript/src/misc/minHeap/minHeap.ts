import { Node } from 'support/trees';

type MinHeap<T> = {
  debug: () => Node<T> | null;
  peek: () => T | null;
  add: (value: T) => void;
};

export const createMinHeap = <T>(): MinHeap<T> => {
  let head: Node<T> | null = null;

  const peek: MinHeap<T>['peek'] = () => head?.value ?? null;

  const add: MinHeap<T>['add'] = (value) => {
    if (!head) {
      head = new Node(value);
    } else {
      let swapValue: T = value;
      let firstNodeWithGap: Node<T> | null = null;
      const toVisit: Node<T>[] = [head];

      while (toVisit.length > 0) {
        const current = toVisit.shift() as Node<T>;

        if (!firstNodeWithGap && (!current.left || !current.right)) {
          firstNodeWithGap = current;
        }

        if (swapValue < current.value) {
          const oldCurrentValue = current.value;
          current.value = swapValue;
          swapValue = oldCurrentValue;
        }

        if (current.left) {
          toVisit.push(current.left);
        }
        if (current.right) {
          toVisit.push(current.right);
        }
      }

      const finalDestination: Node<T> = firstNodeWithGap as Node<T>;

      if (!finalDestination.left) {
        finalDestination.left = new Node(swapValue);
      } else if (!finalDestination.right) {
        finalDestination.right = new Node(swapValue);
      }
    }
  };

  const debug: MinHeap<T>['debug'] = () => head;

  return {
    debug,
    peek,
    add,
  };
};
