package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ArrayProxyTests {

    @Test
    public void canRotateArrayByOffset() {
        int offset = 3;
        Integer[] array = new Integer[] { 0,1,2,3,4,5,6,7 };
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, array);
        proxy.rotateArray(offset);
        assertArrayEquals(array, new Integer[] { 5, 6, 7, 0, 1, 2, 3, 4 });
    }

    @Test
    public void canFindSortedIntersection() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, 1, 3, 4, 5, 6, 7, 9).sort();
        Integer[] intersection = proxy.findSortedIntersection(2, 4, 6, 8);
        assertArrayEquals(new Integer[] { 4, 6 }, intersection);
    }

    @Test
    public void canFindExistingNumberInArrayBinarySearch() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(4, proxy.binarySearch(7));
    }

    @Test
    public void canDetermineNonExistentTargetInBinarySearch() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(-1, proxy.binarySearch(42));
    }

    @Test
    public void emptyArrayIsHandledInBinarySearch() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class);
        assertEquals(-1, proxy.binarySearch(4));
    }

    @Test
    public void nonExistantNumberIsNotFoundBinarySearch() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, 1, 3, 4, 6, 7, 12);
        assertEquals(-1, proxy.binarySearch(5));
    }

    @Test
    public void sortedArraysOfDifferentLengthsCanBeMerged() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, 1, 3, 5, 6).sort();
        Integer[] merged = proxy.mergeSorted(1, 4, 8);
        assertArrayEquals(new Integer[] { 1, 1, 3, 4, 5, 6, 8 }, merged);
    }

    @Test
    public void sortedArraysOfSameLengthsCanBeMerged() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, 1, 3, 5);
        Integer[] merged = proxy.mergeSorted(1, 4, 8);
        assertArrayEquals(new Integer[] { 1, 1, 3, 4, 5, 8 }, merged);
    }

    @Test
    public void emptyArraysCanBeMerged() {
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, 1, 3, 5);
        Integer[] merged = proxy.mergeSorted();
        assertArrayEquals(new Integer[] { 1, 3, 5 }, merged);
    }

    @Test
    public void duplicateNumberInSortedContiguousArrayCanBeFound() {

        int[] array = new int[20];

        for(int i = 1; i < array.length; i++) {
            array[i] = i;
        }

        int expected = 4;
        array[0] = expected;

        long foo = Arrays.findElementRepeatedInSortedContiguousArray(array, 19);
        assertEquals(expected, foo);

    }

    @Test
    public void numberRepeatedOddNumberOfTimesIsFound2() throws Exception {

        int[] array = new int[] { 2,2,2,2,3,3,3,4,4,4,4 };

        int expected = 3;

        int actual = Arrays.findElementRepeatedOddTimes(array);

        assertEquals(expected, actual);

    }
}
