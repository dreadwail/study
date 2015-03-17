package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ArrayTests {

    @Test
    public void canRotateArrayByOffset() {
        int offset = 3;
        Integer[] array = new Integer[] { 0,1,2,3,4,5,6,7 };
        Array<Integer> proxy = new Array<Integer>(Integer.class, array);
        proxy.rotateArray(offset);
        assertArrayEquals(array, new Integer[] { 5, 6, 7, 0, 1, 2, 3, 4 });
    }

    @Test
    public void canFindSortedIntersection() {
        Array<Integer> proxy = new Array<Integer>(Integer.class, 1, 3, 4, 5, 6, 7, 9).sort();
        Integer[] intersection = proxy.findSortedIntersection(2, 4, 6, 8);
        assertArrayEquals(new Integer[] { 4, 6 }, intersection);
    }

    @Test
    public void canFindExistingNumberInArrayBinarySearch() {
        Array<Integer> proxy = new Array<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(4, proxy.binarySearch(7));
    }

    @Test
    public void canDetermineNonExistentTargetInBinarySearch() {
        Array<Integer> proxy = new Array<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(-1, proxy.binarySearch(42));
    }

    @Test
    public void emptyArrayIsHandledInBinarySearch() {
        Array<Integer> proxy = new Array<Integer>(Integer.class);
        assertEquals(-1, proxy.binarySearch(4));
    }

    @Test
    public void nonExistantNumberIsNotFoundBinarySearch() {
        Array<Integer> proxy = new Array<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(-1, proxy.binarySearch(5));
    }

    @Test
    public void sortedArraysOfDifferentLengthsCanBeMerged() {
        Array<Integer> proxy = new Array<Integer>(Integer.class, 1, 3, 5, 6).sort();
        Integer[] merged = proxy.mergeSorted(1, 4, 8);
        assertArrayEquals(new Integer[] { 1, 1, 3, 4, 5, 6, 8 }, merged);
    }

    @Test
    public void sortedArraysOfSameLengthsCanBeMerged() {
        Array<Integer> proxy = new Array<Integer>(Integer.class, 1, 3, 5);
        Integer[] merged = proxy.mergeSorted(1, 4, 8);
        assertArrayEquals(new Integer[] { 1, 1, 3, 4, 5, 8 }, merged);
    }

    @Test
    public void emptyArraysCanBeMerged() {
        Array<Integer> proxy = new Array<Integer>(Integer.class, 1, 3, 5);
        Integer[] merged = proxy.mergeSorted();
        assertArrayEquals(new Integer[] { 1, 3, 5 }, merged);
    }

}
