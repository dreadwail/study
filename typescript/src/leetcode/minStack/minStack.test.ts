import { MinStack } from './minStack';

describe('MinStack', () => {
  describe('push', () => {
    it('can push onto an empty stack', () => {
      const stack = new MinStack();
      stack.push(10);

      expect(stack.toArray()).toEqual([10]);
    });

    it('can push onto a non-empty stack', () => {
      const stack = new MinStack();
      stack.push(10);
      stack.push(20);

      expect(stack.toArray()).toEqual([10, 20]);
    });
  });

  describe('pop', () => {
    it('throws an error for an empty stack', () => {
      const stack = new MinStack();

      expect(() => {
        stack.pop();
      }).toThrowError();
    });

    it('can pop a stack with one element', () => {
      const stack = new MinStack();
      stack.push(10);
      stack.pop();

      expect(stack.toArray()).toEqual([]);
    });

    it('can pop a stack with multiple elements and remove the top one', () => {
      const stack = new MinStack();
      stack.push(10);
      stack.push(20);
      stack.pop();

      expect(stack.toArray()).toEqual([10]);
    });
  });

  describe('top', () => {
    it('throws an error for an empty stack', () => {
      const stack = new MinStack();

      expect(() => {
        stack.top();
      }).toThrowError();
    });

    it('can return the top element for a stack with 1 element', () => {
      const stack = new MinStack();
      stack.push(10);

      expect(stack.top()).toEqual(10);
    });

    it('can return the top element for a stack with multiple elements', () => {
      const stack = new MinStack();
      stack.push(10);
      stack.push(20);

      expect(stack.top()).toEqual(20);
    });
  });

  describe('getMin', () => {
    it('throws an error for an empty stack', () => {
      const stack = new MinStack();

      expect(() => {
        stack.getMin();
      }).toThrowError();
    });

    it('returns the minimum element in a stack with a single entry', () => {
      const stack = new MinStack();
      stack.push(10);

      expect(stack.getMin()).toEqual(10);
    });

    it('returns the minimum element in a stack with multiple entries', () => {
      const stack = new MinStack();
      stack.push(10);
      stack.push(20);

      expect(stack.getMin()).toEqual(10);
    });
  });
});
