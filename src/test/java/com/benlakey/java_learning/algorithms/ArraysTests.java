package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.*;

import org.junit.Test;

import com.benlakey.java_learning.algorithms.Arrays;

public class ArraysTests {
	
	@Test
	public void canRotateArrayByOffset() {

		int offset = 3;
		
		int[] array = new int[] { 0,1,2,3,4,5,6,7 };
		
		Arrays.rotateArray(array, offset);
		
		assertEquals(array[0], 5);
		assertEquals(array[1], 6);
		assertEquals(array[2], 7);
		assertEquals(array[3], 0);
		assertEquals(array[4], 1);
		assertEquals(array[5], 2);
		assertEquals(array[6], 3);
		assertEquals(array[7], 4);
		
	}
	
	@Test
	public void canFindIntersectionOfTwoSortedArrays() {
		
		int[] array1 = new int[] { 1, 3, 4, 5, 6, 7, 9 };
		int[] array2 = new int[] { 2, 4, 6, 8 };
		
		Integer[] expected = new Integer[] { 4, 6 };
		
		Integer[] actual = Arrays.findIntersectionOfSortedArrays(array1, array2);
		for(int i = 0; i < actual.length; i++) {
			assertEquals(expected[i], actual[i]);
		}
		
	}
	
	@Test
	public void canFindExistingNumberInArrayBinarySearch() {
		
		int[] array = new int[] { 1, 3, 4, 6, 7, 12 };
		
		for(int i = 0; i < array.length; i++) {
			int toFind = array[i];
			assertTrue(Arrays.binarySearch(array, 0, array.length - 1, toFind));
		}
		
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
