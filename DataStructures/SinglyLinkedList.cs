using System;
using System.Collections;
using System.Collections.Generic;

namespace DataStructures
{
    public class SinglyLinkedList<T> : ICollection<T>
    {
        protected class Node
        {
            public T Value { get; set; }
            public Node Next { get; set; }

            public Node(T value)
            {
                this.Value = value;
                this.Next = null;
            }

            public Node(T value, Node next)
            {
                this.Value = value;
                this.Next = next;
            }
        }

        private Node head;

        public int Count { get; private set; }

        bool ICollection<T>.IsReadOnly
        {
            get { return false; }
        }

        public SinglyLinkedList()
        {
            this.Count = 0;
        }

        public void AddFront(T toAdd)
        {
            if (this.head == null)
            {
                this.head = new Node(toAdd, null);
            }
            else
            {
                var newHead = new Node(toAdd, this.head);
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

                Node previous = null;
                Node current = this.head;

                for (int i = 0; i < position; i++)
                {
                    previous = current;
                    current = current.Next;
                }

                var nodeToAdd = new Node(toAdd, current);
                previous.Next = nodeToAdd;

                this.Count++;
            }
        }

        public void AddBack(T toAdd)
        {
            if (this.head == null)
            {
                this.head = new Node(toAdd, null);
            }
            else
            {
                Node current = this.head;
                while (current.Next != null)
                {
                    current = current.Next;
                }

                current.Next = new Node(toAdd);
            }
            this.Count++;
        }

        public T RemoveFront()
        {
            if (this.head == null)
            {
                throw new InvalidOperationException("Cannot remove from an empty list.");
            }

            T toReturn = this.head.Value;
            this.head = this.head.Next;

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
                return this.RemoveFront();
            }
            else
            {
                Node previous = null;
                Node current = this.head;

                for (int i = 0; i < position; i++)
                {
                    previous = current;
                    current = current.Next;
                }

                T toReturn = current.Value;
                previous.Next = current.Next;

                this.Count--;

                return toReturn;
            }
        }

        public T RemoveBack()
        {
            if (this.head == null)
            {
                throw new InvalidOperationException();
            }

            T toReturn = default(T);
            toReturn = this.RemoveAt(this.Count - 1);

            return toReturn;
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

        public void ReverseList()
        {
            if (this.head == null)
            {
                return;
            }
            else
            {
                Node previous = null;
                Node current = this.head;
                Node next = null;

                while (current != null)
                {
                    next = current.Next;
                    current.Next = previous;
                    previous = current;
                    current = next;
                }

                this.head = previous;
            }
        }

        private bool ArgumentIsInRange(int position)
        {
            if (this.head == null || (this.Count - 1 < position || position < 0))
            {
                return false;
            }

            return true;
        }

        void ICollection<T>.Add(T item)
        {
            this.AddBack(item);
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

        public bool Remove(T item)
        {
            int idx = IndexOf(item);
            if (idx >= 0)
            {
                this.RemoveAt(idx);
                return true;
            }

            return false;
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
