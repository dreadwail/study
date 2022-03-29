import { createMinHeap } from './minHeap';

describe('min heap', () => {
  it('correctly manages an empty heap', () => {
    const heap = createMinHeap();

    expect(heap.peek()).toBeNull();
  });

  it('correctly manages a heap with only a single element', () => {
    const heap = createMinHeap();
    heap.add(10);

    expect(heap.peek()).toEqual(10);
  });

  it('correctly manages a heap with a single level of elements', () => {
    const heap = createMinHeap();
    heap.add(10);
    heap.add(5);
    heap.add(15);

    expect(heap.peek()).toEqual(5);
  });

  it('correctly manages a heap with multiple levels of elements', () => {
    const heap = createMinHeap();
    heap.add(10);
    heap.add(5);
    heap.add(25);
    heap.add(15);
    heap.add(20);
    heap.add(7);

    expect(heap.peek()).toEqual(5);
  });
});
