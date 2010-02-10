using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace DataStructures
{
    public class BinarySearchTree<K, V> : IDictionary<K, V> where K : IComparable<K>
    {
        protected class BinaryNode
        {
            public KeyValuePair<K, V> Record { get; set; }
            public BinaryNode Left { get; set; }
            public BinaryNode Right { get; set; }

            public int Height
            {
                get
                {
                    int lHeight = 0;
                    int rHeight = 0;

                    if (this.Left != null)
                    {
                        lHeight = this.Left.Height;
                    }

                    if (this.Right != null)
                    {
                        rHeight = this.Right.Height;
                    }

                    return System.Math.Max(lHeight, rHeight) + 1;
                }
            }

            public BinaryNode(K key, V value)
            {
                this.Record = new KeyValuePair<K, V>(key, value);
            }

            public BinaryNode(K key, V value, BinaryNode left, BinaryNode right)
            {
                this.Record = new KeyValuePair<K, V>(key, value);
                this.Left = left;
                this.Right = right;
            }
        }

        private BinaryNode root;

        public int Height
        {
            get
            {
                if (this.root == null)
                {
                    return 0;
                }
                else
                {
                    return this.root.Height;
                }
            }
        }

        public ICollection<K> Keys
        {
            get
            {
                return (from k in this
                        select k.Key).ToList();
            }
        }

        public ICollection<V> Values
        {
            get
            {
                return (from k in this
                        select k.Value).ToList();
            }
        }

        public int Count
        {
            get;
            private set;
        }

        public TreeTraversalType TraversalType { get; set; }

        public BinarySearchTree()
        {
            TraversalType = TreeTraversalType.InOrder;
        }

        public V this[K key]
        {
            get
            {
                V value = default(V);
                if (this.TryGetValue(key, out value))
                {
                    return value;
                }
                else
                {
                    throw new KeyNotFoundException();
                }
            }
            set
            {
                this.Add(key, value);
            }
        }

        public bool TryGetValue(K key, out V value)
        {
            bool success = false;
            value = default(V);

            try
            {
                BinaryNode located = this.TraverseTo(this.root, key);

                if (located != null)
                {
                    value = located.Record.Value;
                    return true;
                }
            }
            catch { }

            return success;
        }

        private BinaryNode TraverseTo(BinaryNode start, K key)
        {
            BinaryNode parent = default(BinaryNode);
            BinaryNode lastVisited = default(BinaryNode);
            BinaryNode located = this.TraverseTo(start, key, out parent, out lastVisited);
            return located;
        }

        private BinaryNode TraverseTo(BinaryNode start, K key, out BinaryNode parent, out BinaryNode lastVisited)
        {
            BinaryNode previous = null;
            BinaryNode current = start;

            while ((current != null && !current.Record.Key.Equals(key)) && !this.NodeIsLeaf(current))
            {
                if (key.CompareTo(current.Record.Key) < 0)
                {
                    if (current.Left == null)
                    {
                        break;
                    }

                    previous = current;
                    current = current.Left;
                }
                else
                {
                    if (current.Right == null)
                    {
                        break;
                    }

                    previous = current;
                    current = current.Right;
                }
            }

            parent = previous;
            lastVisited = current;

            if (current != null && current.Record.Key.Equals(key))
            {
                return current;
            }
            else
            {
                return null;
            }

        }

        public void Clear()
        {
            this.root = null;
            this.Count = 0;
        }

        public void Add(K key, V value)
        {
            var newNode = new BinaryNode(key, value);

            if (this.root == null)
            {
                this.root = newNode;
            }
            else
            {
                BinaryNode parent = null;
                BinaryNode lastVisited = null;
                BinaryNode located = this.TraverseTo(this.root, key, out parent, out lastVisited);

                if (located != null)
                {
                    located.Record = newNode.Record;
                }
                else
                {
                    if (key.CompareTo(lastVisited.Record.Key) < 0)
                    {
                        lastVisited.Left = newNode;
                    }
                    else
                    {
                        lastVisited.Right = newNode;
                    }
                }
            }

            this.Count++;
        }

        public bool ContainsKey(K key)
        {
            V value = default(V);

            if (this.TryGetValue(key, out value))
            {
                return true;
            }

            return false;
        }

        public bool Contains(KeyValuePair<K, V> item)
        {
            V value = default(V);

            if (this.TryGetValue(item.Key, out value) && (value.Equals(item.Value)))
            {
                return true;
            }

            return false;
        }

        private bool NodeIsLeaf(BinaryNode node)
        {
            if (node.Left == null && node.Right == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool Remove(K key)
        {
            BinaryNode parent = default(BinaryNode);
            BinaryNode lastVisited = default(BinaryNode);
            BinaryNode located = this.TraverseTo(this.root, key, out parent, out lastVisited);

            if (located == null)
            {
                return false;
            }
            else
            {
                if (parent == null)
                {
                    if (this.NodeIsLeaf(this.root))
                    {
                        this.root = null;
                    }
                    else if (this.root.Left != null && this.root.Right != null)
                    {
                        this.TwoChildRemove(this.root);
                    }
                    else if (this.root.Left == null)
                    {
                        this.root = this.root.Right;
                    }
                    else
                    {
                        this.root = this.root.Left;
                    }
                }
                else
                {
                    if (parent.Left != null && parent.Left.Record.Key.Equals(key))
                    {
                        if (this.NodeIsLeaf(located))
                        {
                            parent.Left = null;
                        }
                        else if (located.Left != null && located.Right != null)
                        {
                            this.TwoChildRemove(parent.Left);
                        }
                        else if (located.Left == null)
                        {
                            parent.Left = parent.Left.Right;
                        }
                        else
                        {
                            parent.Left = parent.Left.Left;
                        }
                    }
                    else
                    {
                        if (this.NodeIsLeaf(located))
                        {
                            parent.Right = null;
                        }
                        else if (located.Left != null && located.Right != null)
                        {
                            this.TwoChildRemove(parent.Right);
                        }
                        else if (located.Left == null)
                        {
                            parent.Right = parent.Right.Right;
                        }
                        else
                        {
                            parent.Right = parent.Right.Left;
                        }
                    }
                }

                this.Count--;
                return true;

            }
        }

        private void TwoChildRemove(BinaryNode toRemove)
        {
            BinaryNode previous = toRemove.Right;
            BinaryNode current = toRemove.Right.Left;

            if (current == null)
            {
                toRemove.Record = toRemove.Right.Record;
                toRemove.Right = null;
            }
            else
            {
                while (current.Left != null)
                {
                    previous = current;
                    current = current.Left;
                }

                toRemove.Record = current.Record;
                previous.Left = null;
            }
        }

        public void CopyTo(KeyValuePair<K, V>[] array, int arrayIndex)
        {
            int copySpots = array.Length - arrayIndex;

            if (this.Count > copySpots)
            {
                throw new IndexOutOfRangeException();
            }

            foreach (KeyValuePair<K, V> rec in this)
            {
                array[arrayIndex++] = rec;
            }
        }

        public IEnumerator GetEnumerator()
        {
            if (this.root == null)
            {
                yield break;
            }

            if (TraversalType == TreeTraversalType.PostOrder)
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumeratePostOrder(this.root))
                {
                    yield return thisOne;
                }
            }
            else if (TraversalType == TreeTraversalType.PreOrder)
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumeratePreOrder(this.root))
                {
                    yield return thisOne;
                }
            }
            else if (TraversalType == TreeTraversalType.LevelOrder)
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumerateLevelOrder())
                {
                    yield return thisOne;
                }
            }
            else
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumerateInOrder(this.root))
                {
                    yield return thisOne;
                }
            }
        }

        IEnumerator<KeyValuePair<K, V>> IEnumerable<KeyValuePair<K, V>>.GetEnumerator()
        {
            if (this.root == null)
            {
                yield break;
            }

            if (TraversalType == TreeTraversalType.PostOrder)
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumeratePostOrder(this.root))
                {
                    yield return thisOne;
                }
            }
            else if (TraversalType == TreeTraversalType.PreOrder)
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumeratePreOrder(this.root))
                {
                    yield return thisOne;
                }
            }
            else if (TraversalType == TreeTraversalType.LevelOrder)
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumerateLevelOrder())
                {
                    yield return thisOne;
                }
            }
            else
            {
                foreach (KeyValuePair<K, V> thisOne in this.EnumerateInOrder(this.root))
                {
                    yield return thisOne;
                }
            }
        }

        private IEnumerable<KeyValuePair<K, V>> EnumeratePreOrder(BinaryNode current)
        {
            yield return current.Record;

            if (current.Left != null)
            {
                foreach (KeyValuePair<K, V> rec in this.EnumeratePreOrder(current.Left))
                {
                    yield return rec;
                }
            }

            if (current.Right != null)
            {
                foreach (KeyValuePair<K, V> rec in this.EnumeratePreOrder(current.Right))
                {
                    yield return rec;
                }
            }
        }

        private IEnumerable<KeyValuePair<K, V>> EnumerateInOrder(BinaryNode current)
        {
            if (current.Left != null)
            {
                foreach (KeyValuePair<K, V> rec in this.EnumeratePreOrder(current.Left))
                {
                    yield return rec;
                }
            }

            yield return current.Record;

            if (current.Right != null)
            {
                foreach (KeyValuePair<K, V> rec in this.EnumeratePreOrder(current.Right))
                {
                    yield return rec;
                }
            }
        }

        private IEnumerable<KeyValuePair<K, V>> EnumeratePostOrder(BinaryNode current)
        {
            if (current.Left != null)
            {
                foreach (KeyValuePair<K, V> rec in this.EnumeratePreOrder(current.Left))
                {
                    yield return rec;
                }
            }

            if (current.Right != null)
            {
                foreach (KeyValuePair<K, V> rec in this.EnumeratePreOrder(current.Right))
                {
                    yield return rec;
                }
            }

            yield return current.Record;
        }

        private IEnumerable<KeyValuePair<K, V>> EnumerateLevelOrder()
        {
            var tempQueue = new Queue<BinaryNode>();
            tempQueue.Enqueue(this.root);

            while (tempQueue.Count > 0)
            {
                BinaryNode current = tempQueue.Dequeue();
                yield return current.Record;

                if (current.Left != null)
                {
                    tempQueue.Enqueue(current.Left);
                }

                if (current.Right != null)
                {
                    tempQueue.Enqueue(current.Right);
                }
            }
        }

        void System.Collections.Generic.ICollection<KeyValuePair<K, V>>.Add(KeyValuePair<K, V> item)
        {
            this.Add(item.Key, item.Value);
        }

        bool System.Collections.Generic.ICollection<KeyValuePair<K, V>>.IsReadOnly
        {
            get { return false; }
        }

        bool System.Collections.Generic.ICollection<KeyValuePair<K, V>>.Remove(KeyValuePair<K, V> item)
        {
            V value = default(V);
            if (this.TryGetValue(item.Key, out value) && item.Value.Equals(value))
            {
                this.Remove(item.Key);
                return true;
            }

            return false;
        }
    }
}
