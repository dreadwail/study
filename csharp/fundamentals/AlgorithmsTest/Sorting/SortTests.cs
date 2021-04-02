using Algorithms.Sorting;
using NUnit.Framework;

namespace AlgorithmsTest.Sorting
{
    public class SortTests
    {
        [Test]
        public void GeneralSortTest()
        {
            int[] arr = { 5, 67, 31, 9, 7, 52, 1, 92 };

            Sorter.Sort(arr);

            int lastValue = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                Assert.True(arr[i] > lastValue);
            }
        }

        [Test]
        public void BubbleSortTest()
        {
            int[] arr = { 5, 67, 31, 9, 7, 52, 1, 92 };

            Sorter.Sort(arr, SortType.BubbleSort);

            int lastValue = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                Assert.True(arr[i] > lastValue);
            }
        }

        [Test]
        public void InsertionSortTest()
        {
            int[] arr = { 5, 67, 31, 9, 7, 52, 1, 92 };

            Sorter.Sort(arr, SortType.InsertionSort);

            int lastValue = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                Assert.True(arr[i] > lastValue);
            }
        }

        [Test]
        public void SelectionSortTest()
        {
            int[] arr = { 5, 67, 31, 9, 7, 52, 1, 92 };

            Sorter.Sort(arr, SortType.SelectionSort);

            int lastValue = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                Assert.True(arr[i] > lastValue);
            }
        }

        [Test]
        public void QuickSortTest()
        {
            int[] arr = { 5, 67, 31, 9, 7, 52, 1, 92 };

            Sorter.Sort(arr, SortType.QuickSort);

            int lastValue = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                Assert.True(arr[i] > lastValue);
            }
        }
    }
}
