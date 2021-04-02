﻿using System;
using System.Collections.Generic;

namespace Algorithms.Sorting
{
    internal class QuickSort<T> : SortStrategy<T> where T : IComparable<T>
    {
        public override void Execute(IList<T> list)
        {
            this.ExecuteRecursive(list, 0, list.Count - 1);
        }

        private void ExecuteRecursive(IList<T> list, int left, int right)
        {
            int segmentLeft = left; 
            int segmentRight = right;
            
            T pivot;

            pivot = list[(left + right) / 2];

            do
            {
                while ((list[segmentLeft].CompareTo(pivot) < 0) && (segmentLeft < right))
                {
                    segmentLeft++;
                }

                while ((pivot.CompareTo(list[segmentRight]) < 0) && (segmentRight > left))
                {
                    segmentRight--;
                }

                if (segmentLeft <= segmentRight)
                {
                    this.Swap(list, segmentLeft, segmentRight);
                    segmentLeft++; segmentRight--;
                }

            } 
            while (segmentLeft <= segmentRight);

            if (left < segmentRight)
            {
                this.ExecuteRecursive(list, left, segmentRight);
            }

            if (segmentLeft < right)
            {
                this.ExecuteRecursive(list, segmentLeft, right);
            }
        } 

    }
}
