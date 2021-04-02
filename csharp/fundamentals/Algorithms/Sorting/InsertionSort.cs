using System;
using System.Collections.Generic;

namespace Algorithms.Sorting
{
    internal class InsertionSort<T> : SortStrategy<T> where T : IComparable<T>
    {
        public override void Execute(IList<T> list)
        {
            for (int i = 1; i < list.Count; i++)
            {
                T value = list[i];
                
                int j = i - 1;
                
                bool done = false;

                do
                {
                    if (list[j].CompareTo(value) > 0)
                    {
                        list[j + 1] = list[j];
                        j--;
                        
                        if (j < 0)
                        {
                            done = true;
                        }
                    }
                    else
                    {
                        done = true;
                    }
                }
                while (done == false);

                list[j + 1] = value;
            }
        }
    }
}
