package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ImprovedArrayTests {

    @Test
    public void canRotateArrayByOffset() {
        int offset = 3;
        Integer[] array = new Integer[] { 0,1,2,3,4,5,6,7 };
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, array);
        proxy.rotateArray(offset);
        assertArrayEquals(array, new Integer[] { 5, 6, 7, 0, 1, 2, 3, 4 });
    }

    @Test
    public void canFindSortedIntersection() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, 1, 3, 4, 5, 6, 7, 9).sort();
        Integer[] intersection = proxy.findSortedIntersection(2, 4, 6, 8);
        assertArrayEquals(new Integer[] { 4, 6 }, intersection);
    }

    @Test
    public void canFindExistingNumberInArrayBinarySearch() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(4, proxy.binarySearch(7));
    }

    @Test
    public void canDetermineNonExistentTargetInBinarySearch() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(-1, proxy.binarySearch(42));
    }

    @Test
    public void emptyArrayIsHandledInBinarySearch() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class);
        assertEquals(-1, proxy.binarySearch(4));
    }

    @Test
    public void nonExistantNumberIsNotFoundBinarySearch() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(-1, proxy.binarySearch(5));
    }

    @Test
    public void sortedArraysOfDifferentLengthsCanBeMerged() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, 1, 3, 5, 6).sort();
        Integer[] merged = proxy.mergeSorted(1, 4, 8);
        assertArrayEquals(new Integer[] { 1, 1, 3, 4, 5, 6, 8 }, merged);
    }

    @Test
    public void sortedArraysOfSameLengthsCanBeMerged() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, 1, 3, 5);
        Integer[] merged = proxy.mergeSorted(1, 4, 8);
        assertArrayEquals(new Integer[] { 1, 1, 3, 4, 5, 8 }, merged);
    }

    @Test
    public void emptyArraysCanBeMerged() {
        ImprovedArray<Integer> proxy = new ImprovedArray<Integer>(Integer.class, 1, 3, 5);
        Integer[] merged = proxy.mergeSorted();
        assertArrayEquals(new Integer[] { 1, 3, 5 }, merged);
    }

}
