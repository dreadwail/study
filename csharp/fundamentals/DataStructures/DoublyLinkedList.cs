using System;
using System.Collections;
using System.Collections.Generic;

namespace DataStructures
{
    public class DoublyLinkedList<T> : ICollection<T>
    {
        protected class Node
        {
            public T Value { get; set; }
            public Node Previous { get; set; }
            public Node Next { get; set; }

            public Node(T value)
            {
                this.Previous = null;
                this.Value = value;
                this.Next = null;
            }

            public Node(Node prev, T value, Node next)
            {
                this.Previous = prev;
                this.Value = value;
                this.Next = next;
            }
        }

        private Node head;

        public int Count { get; private set; }

        public bool IsReadOnly
        {
            get { return false; }
        }

        public DoublyLinkedList()
        {
            this.Count = 0;
        }

        public void AddFront(T toAdd)
        {
            if (this.head == null)
            {
                this.head = new Node(null, toAdd, null);
            }
            else
            {
                var newHead = new Node(null, toAdd, this.head);
                this.head = newHead;
            }

            this.Count++;
        }

        public void AddAt(int position, T toAdd)
        {
            if (!this.ArgumentIsInRange(position))
            {
                throw new ArgumentOutOfRangeException();
            }
            else
            {
                if (position == 0)
                {
                    this.AddFront(toAdd);
                }

                Node current = this.head;

                for (int i = 0; i < position; i++)
                {
                    current = current.Next;
                }

                var nodeToAdd = new Node(current.Previous, toAdd, current);
                current.Previous.Next = nodeToAdd;
                current.Previous = nodeToAdd;

                this.Count++;
            }
        }

        public void AddBack(T toAdd)
        {
            if (this.head == null)
            {
                this.head = new Node(null, toAdd, null);
            }
            else
            {
                Node current = this.head;
                while (current.Next != null)
                {
                    current = current.Next;
                }

                current.Next = new Node(current, toAdd, null);
            }
            this.Count++;
        }

        public void Add(T item)
        {
            this.AddBack(item);
        }

        public T RemoveFront()
        {
            if (this.head == null)
            {
                throw new InvalidOperationException("Cannot remove from an empty list.");
            }

            T toReturn = this.head.Value;

            this.head = this.head.Next;

            if (this.head != null)
            {
                this.head.Previous = null;
            }

            this.Count--;

            return toReturn;
        }

        public T RemoveAt(int position)
        {
            if (!this.ArgumentIsInRange(position))
            {
                throw new ArgumentOutOfRangeException();
            }

            if (position == 0)
            {
                return RemoveFront();
            }
            else
            {
                Node current = this.head;

                for (int i = 0; i < position; i++)
                {
                    current = current.Next;
                }

                T toReturn = current.Value;

                current.Previous.Next = current.Next;

                if (current.Next != null)
                {
                    current.Next.Previous = current.Previous;
                }

                this.Count--;

                return toReturn;
            }
        }

        public T RemoveBack()
        {
            if (this.head == null)
            {
                throw new InvalidOperationException("Cannot remove from an empty list.");
            }

            T toReturn = default(T);

            toReturn = this.RemoveAt(this.Count - 1);

            return toReturn;
        }

        public bool Remove(T item)
        {
            int idx = this.IndexOf(item);
            if (idx != -1)
            {
                this.RemoveAt(idx);
                return true;
            }

            return false;
        }

        public void Clear()
        {
            this.head = null;
            this.Count = 0;
        }

        public bool Contains(T toFind)
        {
            if (this.IndexOf(toFind) >= 0)
            {
                return true;
            }

            return false;
        }

        public int IndexOf(T toFind)
        {
            Node current = this.head;

            int currentIdx = 0;
            while (current != null)
            {
                if (current.Value.Equals(toFind))
                {
                    return currentIdx;
                }

                current = current.Next;
                currentIdx++;
            }

            return -1;
        }

        public T GetFront()
        {
            if (this.head == null)
            {
                throw new InvalidOperationException();
            }

            return this.head.Value;
        }

        public T GetAt(int position)
        {
            if (!this.ArgumentIsInRange(position))
            {
                throw new ArgumentOutOfRangeException();
            }

            Node current = this.head;

            for (int i = 0; i < position; i++)
            {
                current = current.Next;
            }

            return current.Value;
        }

        public T GetBack()
        {
            if (this.head == null)
            {
                throw new InvalidOperationException();
            }

            T toReturn = default(T);

            toReturn = this.GetAt(this.Count - 1);

            return toReturn;
        }

        private bool ArgumentIsInRange(int position)
        {
            if (this.head == null || (this.Count - 1 < position || position < 0))
            {
                return false;
            }

            return true;
        }

        public void CopyTo(T[] array, int arrayIndex)
        {
            int copySpots = array.Length - arrayIndex;

            if (this.Count > copySpots)
            {
                throw new IndexOutOfRangeException();
            }

            foreach (T rec in this)
            {
                array[arrayIndex++] = rec;
            }
        }

        public IEnumerator<T> GetEnumerator()
        {
            for (int i = (this.Count - 1); i >= 0; i--)
            {
                yield return this.GetAt(i);
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
