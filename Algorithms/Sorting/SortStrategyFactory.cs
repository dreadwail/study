using System;

namespace Algorithms.Sorting
{
    internal class SortStrategyFactory
    {
        public static SortStrategy<T> GetSortStrategy<T>(SortType sortType) where T : IComparable<T>
        {
            switch (sortType)
            {
                case SortType.BubbleSort:
                    return new BubbleSort<T>();

                case SortType.InsertionSort:
                    return new InsertionSort<T>();

                case SortType.SelectionSort:
                    return new SelectionSort<T>();

                case SortType.QuickSort:
                    return new QuickSort<T>();

                default:
                    throw new NotSupportedException("SortType not supported.");
            }
        }
    }
}
