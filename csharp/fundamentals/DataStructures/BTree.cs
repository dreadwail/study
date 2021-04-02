﻿using System;
using System.Collections;
using System.Collections.Generic;

namespace DataStructures
{
    public class BTree<K, V> : IDictionary<K, V> where K : IComparable<K>
    {
        protected class BTreeNodeRecord : IComparable, IComparable<BTreeNodeRecord>
        {
            public KeyValuePair<K, V> Item { get; set; }
            public BTreeNode Left { get; set; }
            public BTreeNode Right { get; set; }

            public BTreeNodeRecord(K key, V value)
            {
                this.Item = new KeyValuePair<K, V>(key, value);
            }

            public int CompareTo(BTreeNodeRecord other)
            {
                return this.Item.Key.CompareTo(other.Item.Key);
            }

            public int CompareTo(object obj)
            {
                return this.CompareTo(obj as BTreeNodeRecord);
            }

            public override string ToString()
            {
                return this.Item.Key.ToString();
            }
        }

        protected class BTreeNode
        {
            private int treeOrder;

            public List<BTreeNodeRecord> Records { get; set; }

            public bool IsLeaf
            {
                get
                {
                    foreach (BTreeNodeRecord thisRecord in this.Records)
                    {
                        if (thisRecord.Left != null || thisRecord.Right != null)
                        {
                            return false;
                        }
                    }

                    return true;
                }
            }

            public bool HasRoom
            {
                get
                {
                    if (this.Records.Count < (this.treeOrder - 1))
                    {
                        return true;
                    }

                    return false;
                }
            }

            public bool VulnerableToTheft
            {
                get
                {
                    if (this.Records.Count > 1)
                    {
                        return true;
                    }

                    return false;
                }
            }

            public BTreeNode(int treeOrder)
            {
                this.treeOrder = treeOrder;
                this.Records = new List<BTreeNodeRecord>();
            }

            public BTreeNode(int treeOrder, K key, V value)
            {
                this.treeOrder = treeOrder;
                this.Records = new List<BTreeNodeRecord>();
                this.Records.Add(new BTreeNodeRecord(key, value));
            }

            public BTreeNodeRecord LeftOf(BTreeNodeRecord rec)
            {
                if (!this.Records.Contains(rec))
                {
                    return null;
                }

                int idxOf = this.Records.IndexOf(rec);

                if (this.IndexIsInRange(idxOf - 1))
                {
                    return this.Records[idxOf - 1];
                }
                else
                {
                    return null;
                }
            }

            public BTreeNodeRecord RightOf(BTreeNodeRecord rec)
            {
                BTreeNodeRecord recFound = this.ClosestRecord(rec.Item.Key);

                if (recFound.Item.Key.CompareTo(rec.Item.Key) != 0)
                {
                    return null;
                }

                int idxOf = this.Records.IndexOf(rec);

                if (this.IndexIsInRange(idxOf + 1))
                {
                    return this.Records[idxOf + 1];
                }
                else
                {
                    return null;
                }
            }

            public BTreeNodeRecord ClosestRecord(K key)
            {
                int idx = this.Records.BinarySearch(new BTreeNodeRecord(key, default(V)));

                if (idx < 0)
                {
                    idx = ~idx;
                }

                if (idx >= this.Records.Count)
                {
                    idx--;
                }

                return this.Records[idx];
            }

            public bool IndexIsInRange(int idx)
            {
                if (idx >= 0 && idx < this.Records.Count)
                {
                    return true;
                }

                return false;
            }

            public bool ContainsKey(K key)
            {
                BTreeNodeRecord recFound = this.ClosestRecord(key);

                if (recFound.Item.Key.Equals(key))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            public override string ToString()
            {
                string retval = "";
                this.Records.ForEach(record => retval += record.ToString() + ", ");
                return retval.Remove(retval.Length - 1);
            }
        }

        private int order;
        private int size;
        private BTreeNode root;

        public int Count
        {
            get { return this.size; }
        }

        public TreeTraversalType TraversalType { get; set; }

        public bool IsReadOnly
        {
            get
            {
                return false;
            }
        }

        public BTree(int order)
        {
            if (order < 2)
            {
                throw new ArgumentOutOfRangeException(string.Format("Order {0} would not be a tree.", order));
            }

            this.order = order;
            this.root = null;
        }

        public void Add(KeyValuePair<K, V> item)
        {
            this.Add(item.Key, item.Value);
        }

        public void Add(K key, V value)
        {
            if (this.root == null)
            {
                this.root = new BTreeNode(this.order, key, value);
                this.size++;
            }
            else
            {
                BTreeNode parentNode = null;
                BTreeNode currentNode = this.root;

                while (!currentNode.IsLeaf || !currentNode.HasRoom)
                {
                    if (!currentNode.HasRoom)
                    {
                        this.PushSidesDown(currentNode);
                        currentNode = this.AttachSingleNodeToParent(currentNode, parentNode);
                    }

                    BTreeNodeRecord closest = currentNode.ClosestRecord(key);

                    if (key.Equals(closest.Item.Key))
                    {
                        closest.Item = new KeyValuePair<K, V>(key, value);
                        return;
                    }
                    else
                    {
                        parentNode = currentNode;

                        if (key.CompareTo(closest.Item.Key) < 0 && closest.Left != null)
                        {
                            currentNode = closest.Left;
                        }
                        else
                        {
                            currentNode = closest.Right;
                        }
                    }
                }

                if (currentNode.ContainsKey(key))
                {
                    currentNode.ClosestRecord(key).Item = new KeyValuePair<K, V>(key, value);
                }
                else
                {
                    currentNode.Records.Add(new BTreeNodeRecord(key, value));
                    currentNode.Records.Sort();
                    this.size++;
                }
            }
        }

        private void PushSidesDown(BTreeNode currentNode)
        {
            int currentNodeRecordCount = currentNode.Records.Count;
            int midIdx = currentNodeRecordCount / 2;

            List<BTreeNodeRecord> listLeft = currentNode.Records.GetRange(0, midIdx);
            List<BTreeNodeRecord> listRight = currentNode.Records.GetRange((midIdx + 1), (currentNodeRecordCount - 1 - midIdx));

            //remove sides of current
            foreach (BTreeNodeRecord rec in listLeft)
            {
                currentNode.Records.Remove(rec);
            }

            foreach (BTreeNodeRecord rec in listRight)
            {
                currentNode.Records.Remove(rec);
            }

            //add sides to current's children
            if (listLeft.Count > 0)
            {
                currentNode.Records[0].Left = new BTreeNode(this.order);

                foreach (BTreeNodeRecord rec in listLeft)
                {
                    currentNode.Records[0].Left.Records.Add(rec);
                }
            }

            if (listRight.Count > 0)
            {
                currentNode.Records[0].Right = new BTreeNode(this.order);

                foreach (BTreeNodeRecord rec in listRight)
                {
                    currentNode.Records[0].Right.Records.Add(rec);
                }
            }
        }

        private BTreeNode AttachSingleNodeToParent(BTreeNode singleNode, BTreeNode parentNode)
        {
            if (parentNode == null)
            {
                return singleNode;
            }

            BTreeNodeRecord singleNodeRecord = singleNode.Records[0];

            parentNode.Records.Add(singleNodeRecord);
            parentNode.Records.Sort();

            BTreeNodeRecord leftOf = parentNode.LeftOf(singleNodeRecord);
            BTreeNodeRecord rightOf = parentNode.RightOf(singleNodeRecord);

            if (leftOf != null)
            {
                leftOf.Right = singleNodeRecord.Left;
            }

            if (rightOf != null)
            {
                rightOf.Left = singleNodeRecord.Right;
            }

            return parentNode;
        }

        public bool Remove(KeyValuePair<K, V> item)
        {
            return this.Remove(item.Key);
        }

        public bool Remove(K key)
        {
            if (this.root == null)
            {
                return false;
            }

            BTreeNode foundNode = this.FindNode(this.root, key, -1, true);

            if (foundNode == null)
            {
                return false;
            }

            if (foundNode.ClosestRecord(key).Item.Key.Equals(key))
            {
                this.FixPathSingles(key);

                foundNode = this.FindNode(this.root, key, -1, true);

                if (foundNode.IsLeaf)
                {
                    if (foundNode.Records.Count > 1)
                    {
                        this.RemoveLeaf(key);
                    }
                    else
                    {
                        this.root = null;
                        this.size = 0;
                    }
                }
                else
                {
                    this.RemoveInternal(key);
                }

                return true;
            }

            return false;
        }

        private void RemoveLeaf(K key)
        {
            BTreeNode foundNode = this.FindNode(this.root, key, -1, true);
            BTreeNodeRecord foundRecord = foundNode.ClosestRecord(key);

            foundNode.Records.Remove(foundRecord);
            this.size--;

        }

        private void RemoveInternal(K key)
        {
            BTreeNodeRecord found = this.FindRecord(this.root, key, -1, true);
            BTreeNodeRecord nextHighest = this.FindRecord(found.Right, key, -1, false);

            KeyValuePair<K, V> temp = nextHighest.Item;

            this.Remove(temp.Key);

            BTreeNodeRecord foundAnew = this.FindRecord(this.root, key, -1, true);

            foundAnew.Item = temp;
        }

        private void FixPathSingles(K key)
        {

            BTreeNode parentNode = null;
            BTreeNode currentNode = this.root;

            while (currentNode != null)
            {
                if (currentNode.Records.Count == 1 && !currentNode.Equals(this.root))
                {
                    currentNode = FixSingle(parentNode, currentNode);
                }

                if (currentNode.ContainsKey(key))
                {
                    break;
                }

                parentNode = currentNode;
                currentNode = this.FindNode(currentNode, key, 1, false);
            }
        }

        private BTreeNode FixSingle(BTreeNode parent, BTreeNode node)
        {
            K key = node.Records[0].Item.Key;

            int largerParentIdx = parent.Records.BinarySearch(new BTreeNodeRecord(key, default(V)));

            if (largerParentIdx < 0)
            {
                largerParentIdx = ~largerParentIdx;
            }

            BTreeNodeRecord parentRecordLeft = null;
            BTreeNodeRecord parentRecordRight = null;

            if (parent.IndexIsInRange(largerParentIdx - 1))
            {
                parentRecordLeft = parent.Records[largerParentIdx - 1];
            }

            if (parent.IndexIsInRange(largerParentIdx))
            {
                parentRecordRight = parent.Records[largerParentIdx];
            }

            BTreeNode nodeToReturn = null;

            if (parentRecordLeft != null && parentRecordLeft.Left != null && parentRecordLeft.Left.VulnerableToTheft)
            {
                nodeToReturn = this.RotateFromLeft(node, parentRecordLeft);
            }
            else if (parentRecordRight != null && parentRecordRight.Right != null && parentRecordRight.Right.VulnerableToTheft)
            {
                nodeToReturn = this.RotateFromRight(node, parentRecordRight);
            }
            else if (parent.VulnerableToTheft && parentRecordLeft != null)
            {
                nodeToReturn = this.FuseParentAndLeft(node, parent, parentRecordLeft, parentRecordRight);
            }
            else if (parent.VulnerableToTheft && parentRecordRight != null)
            {
                nodeToReturn = this.FuseParentAndRight(node, parent, parentRecordLeft, parentRecordRight);
            }
            else if (!parent.VulnerableToTheft && parent.Equals(this.root))
            {
                nodeToReturn = this.FuseNewRoot(parent);
            }

            return nodeToReturn;

        }

        private BTreeNode RotateFromLeft(BTreeNode node, BTreeNodeRecord parentRecordLeft)
        {
            BTreeNode leftSiblingNode = parentRecordLeft.Left;
            BTreeNodeRecord toRotateUp = leftSiblingNode.Records[leftSiblingNode.Records.Count - 1];
            BTreeNodeRecord toPullDown = parentRecordLeft;
            BTreeNode orphaned = toRotateUp.Right;

            KeyValuePair<K, V> keyValToRotateUp = toRotateUp.Item;
            KeyValuePair<K, V> keyValToPullDown = toPullDown.Item;

            leftSiblingNode.Records.RemoveAt(leftSiblingNode.Records.Count - 1);
            parentRecordLeft.Item = keyValToRotateUp;

            node.Records.Insert(0, new BTreeNodeRecord(keyValToPullDown.Key, keyValToPullDown.Value));

            node.Records[0].Left = orphaned;
            node.Records[0].Right = node.Records[1].Left;

            return node;
        }

        private BTreeNode RotateFromRight(BTreeNode node, BTreeNodeRecord parentRecordRight)
        {
            BTreeNode rightSiblingNode = parentRecordRight.Right;
            BTreeNodeRecord toRotateUp = rightSiblingNode.Records[0];
            BTreeNodeRecord toPullDown = parentRecordRight;
            BTreeNode orphaned = toRotateUp.Left;

            KeyValuePair<K, V> keyValToRotateUp = toRotateUp.Item;
            KeyValuePair<K, V> keyValToPullDown = toPullDown.Item;

            rightSiblingNode.Records.RemoveAt(0);
            parentRecordRight.Item = keyValToRotateUp;

            node.Records.Add(new BTreeNodeRecord(keyValToPullDown.Key, keyValToPullDown.Value));

            node.Records[node.Records.Count - 1].Left = node.Records[node.Records.Count - 2].Right;
            node.Records[node.Records.Count - 1].Right = orphaned;

            return node;
        }

        private BTreeNode FuseParentAndLeft(BTreeNode node, BTreeNode parentNode, BTreeNodeRecord parentRecordLeft, BTreeNodeRecord parentRecordRight)
        {
            //store
            BTreeNodeRecord leftSiblingNodeRecord = parentRecordLeft.Left.Records[0];
            BTreeNodeRecord nodeRecord = node.Records[0];
            BTreeNodeRecord parentRecordLeftLeft = parentNode.LeftOf(parentRecordLeft);

            //remove what will be middle node from parent
            parentNode.Records.Remove(parentRecordLeft);

            //break middle node child links
            parentRecordLeft.Left = null;
            parentRecordLeft.Right = null;

            //make node to fuse to
            var fused = new BTreeNode(this.order);
            fused.Records.Add(leftSiblingNodeRecord);
            fused.Records.Add(parentRecordLeft);
            fused.Records.Add(nodeRecord);

            //correct middle node child links
            parentRecordLeft.Left = leftSiblingNodeRecord.Right;
            parentRecordLeft.Right = nodeRecord.Left;

            //wire parents to the fused node
            if (parentRecordLeftLeft != null)
            {
                parentRecordLeftLeft.Right = fused;
            }

            if (parentRecordRight != null)
            {
                parentRecordRight.Left = fused;
            }

            return fused;
        }

        private BTreeNode FuseParentAndRight(BTreeNode node, BTreeNode parentNode, BTreeNodeRecord parentRecordLeft, BTreeNodeRecord parentRecordRight)
        {
            //store
            BTreeNodeRecord rightSiblingNodeRecord = parentRecordRight.Right.Records[0];
            BTreeNodeRecord nodeRecord = node.Records[0];
            BTreeNodeRecord parentRecordRightRight = parentNode.RightOf(parentRecordRight);

            //remove what will be middle node from parent
            parentNode.Records.Remove(parentRecordRight);

            //break middle node child links
            parentRecordRight.Left = null;
            parentRecordRight.Right = null;

            //make node to fuse to
            BTreeNode fused = new BTreeNode(this.order);
            fused.Records.Add(nodeRecord);
            fused.Records.Add(parentRecordRight);
            fused.Records.Add(rightSiblingNodeRecord);

            //correct middle node child links
            parentRecordRight.Left = nodeRecord.Right;
            parentRecordRight.Right = rightSiblingNodeRecord.Left;

            //wire parents to the fused node
            if (parentRecordRightRight != null)
            {
                parentRecordRightRight.Left = fused;
            }

            if (parentRecordLeft != null)
            {
                parentRecordLeft.Right = fused;
            }

            return fused;
        }

        private BTreeNode FuseNewRoot(BTreeNode parentNode)
        {
            //_root == parentNode and has 1 key, so fuse self, root, sibling into 1 new root

            BTreeNodeRecord rootRecord = this.root.Records[0];
            BTreeNodeRecord leftRecord = rootRecord.Left.Records[0];
            BTreeNodeRecord rightRecord = rootRecord.Right.Records[0];

            this.root.Records.Insert(0, leftRecord);
            this.root.Records.Add(rightRecord);

            rootRecord.Left = leftRecord.Right;
            rootRecord.Right = rightRecord.Left;

            return this.root;
        }

        public void Clear()
        {
            this.root = null;
            this.size = 0;
        }

        private BTreeNode FindNode(BTreeNode start, K key, int depthRestriction, bool exactMatch)
        {
            if (this.root == null)
            {
                return null;
            }

            BTreeNode currentNode = start;

            int depthTraversed = 0;

            while (currentNode != null)
            {
                BTreeNodeRecord currentRecord = currentNode.ClosestRecord(key);

                if (currentRecord.Item.Key.Equals(key))
                {
                    return currentNode;
                }
                else if (depthTraversed == depthRestriction)
                {
                    if (exactMatch)
                    {
                        return null;
                    }
                    else
                    {
                        return currentNode;
                    }
                }
                else
                {
                    depthTraversed++;

                    if (key.CompareTo(currentRecord.Item.Key) < 0 && currentRecord.Left != null)
                    {
                        currentNode = currentRecord.Left;
                    }
                    else if (currentRecord.Right != null)
                    {
                        currentNode = currentRecord.Right;
                    }
                    else
                    {
                        if (exactMatch)
                        {
                            return null;
                        }
                        else
                        {
                            return currentNode;
                        }
                    }
                }
            }

            if (exactMatch)
            {
                return null;
            }
            else
            {
                return currentNode;
            }
        }

        private BTreeNodeRecord FindRecord(BTreeNode start, K key, int depthRestriction, bool exactMatch)
        {
            if (this.root == null)
            {
                return null;
            }

            BTreeNode containingNode = this.FindNode(start, key, depthRestriction, exactMatch);

            if (exactMatch && containingNode == null)
            {
                return null;
            }

            BTreeNodeRecord found = containingNode.ClosestRecord(key);

            if (!exactMatch)
            {
                return found;
            }

            if (found.Item.Key.Equals(key))
            {
                return found;
            }

            return null;
        }

        public bool TryGetValue(K key, out V value)
        {
            value = default(V);

            BTreeNodeRecord found = this.FindRecord(this.root, key, -1, true);

            if (found != null)
            {
                value = found.Item.Value;
                return true;
            }

            return false;
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

        public bool ContainsKey(K key)
        {
            V val = default(V);

            bool found = this.TryGetValue(key, out val);

            if (found)
            {
                return true;
            }

            return false;
        }

        public bool Contains(KeyValuePair<K, V> item)
        {
            V val = default(V);

            bool found = this.TryGetValue(item.Key, out val);

            if (found && val.Equals(item.Value))
            {
                return true;
            }

            return false;
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

        public ICollection<K> Keys
        {
            get
            {
                List<K> keysList = new List<K>();

                foreach (KeyValuePair<K, V> thisOne in this)
                {
                    keysList.Add(thisOne.Key);
                }

                return keysList;
            }
        }

        public ICollection<V> Values
        {
            get
            {
                List<V> valuesList = new List<V>();

                foreach (KeyValuePair<K, V> thisOne in this)
                {
                    valuesList.Add(thisOne.Value);
                }

                return valuesList;
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

        private IEnumerable<KeyValuePair<K, V>> EnumeratePreOrder(BTreeNode current)
        {
            foreach (BTreeNodeRecord rec in current.Records)
            {
                yield return rec.Item;

                if (rec.Left != null)
                {
                    foreach (KeyValuePair<K, V> iRec in this.EnumeratePreOrder(rec.Left))
                    {
                        yield return iRec;
                    }
                }

                if (rec.Right != null)
                {
                    foreach (KeyValuePair<K, V> iRec in this.EnumeratePreOrder(rec.Right))
                    {
                        yield return iRec;
                    }
                }
            }
        }

        private IEnumerable<KeyValuePair<K, V>> EnumerateInOrder(BTreeNode current)
        {
            foreach (BTreeNodeRecord rec in current.Records)
            {
                if (rec.Left != null)
                {
                    foreach (KeyValuePair<K, V> iRec in this.EnumerateInOrder(rec.Left))
                    {
                        yield return iRec;
                    }
                }

                yield return rec.Item;

                if (rec.Right != null)
                {
                    foreach (KeyValuePair<K, V> iRec in this.EnumerateInOrder(rec.Right))
                    {
                        yield return iRec;
                    }
                }
            }
        }

        private IEnumerable<KeyValuePair<K, V>> EnumeratePostOrder(BTreeNode current)
        {
            foreach (BTreeNodeRecord rec in current.Records)
            {
                if (rec.Left != null)
                {
                    foreach (KeyValuePair<K, V> iRec in this.EnumeratePostOrder(rec.Left))
                    {
                        yield return iRec;
                    }
                }

                if (rec.Right != null)
                {
                    foreach (KeyValuePair<K, V> iRec in this.EnumeratePostOrder(rec.Right))
                    {
                        yield return iRec;
                    }
                }

                yield return rec.Item;
            }
        }

        private IEnumerable<KeyValuePair<K, V>> EnumerateLevelOrder()
        {
            var tempQueue = new Queue<BTreeNode>();
            
            tempQueue.Enqueue(this.root);

            while (tempQueue.Count > 0)
            {
                BTreeNode current = tempQueue.Dequeue();

                foreach (BTreeNodeRecord rec in current.Records)
                {
                    yield return rec.Item;

                    if (rec.Left != null)
                    {
                        tempQueue.Enqueue(rec.Left);
                    }

                    if (rec.Right != null)
                    {
                        tempQueue.Enqueue(rec.Right);
                    }
                }
            }
        }
    }
}
