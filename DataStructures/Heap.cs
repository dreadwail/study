using System;
using System.Collections.Generic;
using System.Linq;

namespace DataStructures
{
    public class Heap<K, V> where K : IComparable<K>
    {
        private List<KeyValuePair<K, V>> heapStorage;

        public int Count
        {
            get
            {
                return this.heapStorage.Count - 1;
            }
        }

        public Heap()
        {
            this.heapStorage = 
                new List<KeyValuePair<K, V>>() 
                { 
                    new KeyValuePair<K, V>(default(K), default(V)) 
                };
        }

        public KeyValuePair<K, V> Peek()
        {
            if (this.heapStorage.Count == 1)
            {
                throw new InvalidOperationException("The heap was empty.");
            }
            else
            {
                return this.heapStorage[1];
            }
        }

        public KeyValuePair<K, V> Pop()
        {
            KeyValuePair<K, V> toReturn = Peek();

            //swap last and root
            this.Swap(this.heapStorage.Count - 1, 1);

            this.heapStorage.RemoveAt(this.heapStorage.Count - 1);

            //bubble new item at root down to appropriate location (children are 2i and 2i+1)
            int currentIdx = 1;

            while (this.IndexIsInHeapRange(currentIdx))
            {
                int leftChildIdx = 2 * currentIdx;
                int rightChildIdx = (2 * currentIdx) + 1;

                if (this.IndexIsInHeapRange(leftChildIdx) && this.IndexIsInHeapRange(rightChildIdx))
                {
                    if (this.IndexIsInHeapRange(leftChildIdx) && 
                        this.heapStorage[leftChildIdx].Key.CompareTo(this.heapStorage[rightChildIdx].Key) > 0 && 
                        this.heapStorage[leftChildIdx].Key.CompareTo(this.heapStorage[currentIdx].Key) > 0)
                    {
                        this.Swap(currentIdx, leftChildIdx);
                        currentIdx = leftChildIdx;
                        continue;
                    }

                    if (this.IndexIsInHeapRange(rightChildIdx) && 
                        this.heapStorage[rightChildIdx].Key.CompareTo(this.heapStorage[leftChildIdx].Key) > 0 && 
                        this.heapStorage[rightChildIdx].Key.CompareTo(this.heapStorage[currentIdx].Key) > 0)
                    {
                        Swap(currentIdx, rightChildIdx);
                        currentIdx = rightChildIdx;
                        continue;
                    }
                    else
                    {
                        break;
                    }
                }
                else if (this.IndexIsInHeapRange(leftChildIdx) && !this.IndexIsInHeapRange(rightChildIdx))
                {
                    if (this.heapStorage[leftChildIdx].Key.CompareTo(this.heapStorage[currentIdx].Key) > 0)
                    {
                        this.Swap(currentIdx, leftChildIdx);
                        currentIdx = leftChildIdx;
                    }
                    else
                    {
                        break;
                    }
                }
                else if (!this.IndexIsInHeapRange(leftChildIdx) && this.IndexIsInHeapRange(rightChildIdx))
                {
                    if (this.heapStorage[rightChildIdx].Key.CompareTo(this.heapStorage[currentIdx].Key) > 0)
                    {
                        this.Swap(currentIdx, rightChildIdx);
                        currentIdx = rightChildIdx;
                    }
                    else
                    {
                        break;
                    }
                }
                else
                {
                    break;
                }
            }

            return toReturn;
        }

        private bool IndexIsInHeapRange(int idx)
        {
            if (idx >= 1 && idx <= this.heapStorage.Count - 1)
            {
                return true;
            }

            return false;
        }

        private void Swap(int leftIdx, int rightIdx)
        {
            KeyValuePair<K, V> tmp = this.heapStorage[leftIdx];
            this.heapStorage[leftIdx] = this.heapStorage[rightIdx];
            this.heapStorage[rightIdx] = tmp;
        }

        public void Push(K key, V value)
        {
            this.heapStorage.Add(new KeyValuePair<K, V>(key, value));

            int currentIdx = this.heapStorage.Count - 1;
            int parentIdx = currentIdx / 2;

            while (parentIdx > 0)
            {
                if (this.heapStorage[parentIdx].Key.CompareTo(this.heapStorage[currentIdx].Key) < 0)
                {
                    this.Swap(parentIdx, currentIdx);
                    currentIdx = parentIdx;
                    parentIdx = currentIdx / 2;
                }
                else
                {
                    break;
                }
            }
        }

        public bool ContainsKey(K key)
        {
            for (int i = 1; i < this.heapStorage.Count; i++)
            {
                if (this.heapStorage[i].Key.Equals(key))
                {
                    return true;
                }
            }

            return false;
        }

        public ICollection<K> Keys
        {
            get
            {
                return (from keyVal in this.heapStorage
                        select keyVal.Key).ToList();
            }
        }

        public ICollection<V> Values
        {
            get
            {
                return (from keyVal in this.heapStorage
                        select keyVal.Value).ToList();
            }
        }

        public void Clear()
        {
            this.heapStorage = 
                new List<KeyValuePair<K, V>>() 
                { 
                    new KeyValuePair<K, V>(default(K), default(V)) 
                };
        }

        public bool Contains(KeyValuePair<K, V> item)
        {
            for (int i = 1; i < this.heapStorage.Count; i++)
            {
                if (this.heapStorage[i].Equals(item))
                {
                    return true;
                }
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

            this.heapStorage.CopyTo(array, 1);
        }

        public IEnumerator<KeyValuePair<K, V>> GetEnumerator()
        {
            for (int i = 1; i < this.heapStorage.Count; i++)
            {
                yield return this.heapStorage[i];
            }
        }
    }
}
