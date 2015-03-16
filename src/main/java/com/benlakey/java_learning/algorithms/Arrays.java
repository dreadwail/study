package com.benlakey.java_learning.algorithms;


public class Arrays {

	public static long findElementRepeatedInSortedContiguousArray(int[] array, int maxValue) {

		long sum = 0;

		for(int i = 0; i < array.length; i++) {
			sum += array[i];
		}

		long expected = (maxValue * (maxValue + 1)) / 2;

		return sum - expected;

	}

	public static int findElementRepeatedOddTimes(int[] array) throws Exception {

		if(array.length == 0) {
			throw new IllegalArgumentException("Empty array!");
		}

		int valueBits = array[0];

		for(int i = 1; i < array.length; i++) {
			valueBits = valueBits ^ array[i];
		}

		if(valueBits == 0) {
			throw new Exception("No odd repeating!");
		}

		return valueBits;
	}


}
