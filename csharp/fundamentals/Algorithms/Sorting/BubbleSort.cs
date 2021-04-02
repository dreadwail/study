using System;
using System.Collections.Generic;

namespace Algorithms.Sorting
{
    internal class BubbleSort<T> : SortStrategy<T> where T : IComparable<T>
    {
        public override void Execute(IList<T> list)
        {
            bool swap = false;

            do
            {
                swap = false;
                for (int i = 0; i < list.Count - 1; i++)
                {
                    if (list[i].CompareTo(list[i + 1]) > 0)
                    {
                        this.Swap(list, i, (i + 1));
                        swap = true;
                    }
                }
            }
            while (swap == true);
        }
    }
}
