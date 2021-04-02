using System;
using System.Collections.Generic;

namespace Algorithms.Sorting
{
    internal class SelectionSort<T> : SortStrategy<T> where T : IComparable<T>
    {
        public override void Execute(IList<T> list)
        {
            for (int i = 0; i < list.Count - 1; i++)
            {
                for (int j = i + 1; j < list.Count; j++)
                {
                    if (list[i].CompareTo(list[j]) > 0)
                    {
                        this.Swap(list, i, j);
                    }
                }
            }
        }
    }
}
