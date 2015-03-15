package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

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
    public void canFindIntersection() {
        Integer[] array1 = new Integer[] { 1, 3, 4, 5, 6, 7, 9 };

        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, array1);

        Integer[] intersection = proxy.findIntersection(2, 4, 6, 8);
        assertArrayEquals(new Integer[] { 4, 6 }, intersection);
    }

    @Test
    public void canFindExistingNumberInArrayBinarySearch() {
        Integer[] array = new Integer[] { 1, 3, 4, 6, 7, 12 };
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, array);
        assertEquals(4, proxy.binarySearch(7));
    }

    @Test
    public void canDetermineNonExistentTargetInBinarySearch() {
        Integer[] array = new Integer[] { 1, 3, 4, 6, 7, 12 };
        ArrayProxy<Integer> proxy = new ArrayProxy<Integer>(Integer.class, array);
        assertEquals(-1, proxy.binarySearch(42));
    }

    @Test
    public void emptyArrayIsHandledOkInBinarySearch() {

        int[] array = new int[0];

        assertFalse(Arrays.binarySearch(array, 0, 0, 4));

    }

    @Test
    public void nonExistantNumberIsNotFoundBinarySearch() {

        int[] array = new int[] { 1, 3, 4, 6, 7, 12 };

        int toFind = 5;

        assertFalse(Arrays.binarySearch(array, 0, array.length - 1, toFind));

    }

    @Test
    public void sortedArraysOfDifferentLengthsCanBeMerged() {

        int[] arrayOne = new int[] { 1, 3, 5, 6 };
        int[] arrayTwo = new int[] { 1, 4, 8 };

        int[] expectedArray = new int[] { 1, 1, 3, 4, 5, 6, 8 };

        int[] actualArray = Arrays.mergeSortedArrays(arrayOne, arrayTwo);

        for(int i = 0; i < expectedArray.length; i++) {
            assertEquals(expectedArray[i], actualArray[i]);
        }

    }

    @Test
    public void sortedArraysOfSameLengthsCanBeMerged() {

        int[] arrayOne = new int[] { 1, 3, 5 };
        int[] arrayTwo = new int[] { 1, 4, 8 };

        int[] expectedArray = new int[] { 1, 1, 3, 4, 5, 8 };

        int[] actualArray = Arrays.mergeSortedArrays(arrayOne, arrayTwo);

        for(int i = 0; i < expectedArray.length; i++) {
            assertEquals(expectedArray[i], actualArray[i]);
        }

    }

    @Test
    public void emptyArraysCanBeMerged() {

        int[] arrayOne = new int[] { 1, 3, 5 };
        int[] arrayTwo = new int[0];

        int[] expectedArray = new int[] { 1, 3, 5 };

        int[] actualArray = Arrays.mergeSortedArrays(arrayOne, arrayTwo);

        for(int i = 0; i < expectedArray.length; i++) {
            assertEquals(expectedArray[i], actualArray[i]);
        }

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
