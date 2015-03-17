package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class NumbersTests {

	@Test
	public void zeroDoesNotGetIdentifiedAsPowerOfTwo() {
		assertFalse(Numbers.IsPowerOfTwo(0));
	}

	@Test
	public void correctNumbersAreIdentifiedAsBeingPowerOfTwo() {

		assertTrue(Numbers.IsPowerOfTwo(1));
		assertTrue(Numbers.IsPowerOfTwo(2));
		assertTrue(Numbers.IsPowerOfTwo(4));
		assertTrue(Numbers.IsPowerOfTwo(8));
		assertTrue(Numbers.IsPowerOfTwo(16));
		assertTrue(Numbers.IsPowerOfTwo(32));

	}

	@Test
	public void binaryRepresentationOfZeroIsCorrect() {

		String binary = Numbers.getBinaryRepresentation(0);
		String expected = "";

		assertEquals(expected, binary);

	}

	@Test
	public void binaryRepresentationOfNonZeroNumbersIsCorrect() {

		String binary = "";
		String expected = "";

		binary = Numbers.getBinaryRepresentation(47);
		expected = "101111";
		assertEquals(expected, binary);

		binary = Numbers.getBinaryRepresentation(33);
		expected = "100001";
		assertEquals(expected, binary);

	}

	@Test
	public void canGetFirstNPrimes() {

		int[] primes = Numbers.getPrimes(5);

		assertEquals(2, primes[0]);
		assertEquals(3, primes[1]);
		assertEquals(5, primes[2]);
		assertEquals(7, primes[3]);
		assertEquals(11, primes[4]);

	}

	@Test
	public void evenNumbersAreCorrectlyIdentified() {

		assertTrue(Numbers.isEven(0));
		assertFalse(Numbers.isEven(1));
		assertTrue(Numbers.isEven(2));
		assertFalse(Numbers.isEven(3));
		assertTrue(Numbers.isEven(4));
		assertFalse(Numbers.isEven(5));
		assertTrue(Numbers.isEven(6));
		assertFalse(Numbers.isEven(7));
		assertTrue(Numbers.isEven(8));
		assertFalse(Numbers.isEven(9));
		assertTrue(Numbers.isEven(10));
		assertFalse(Numbers.isEven(11));
		assertTrue(Numbers.isEven(12));

	}

	@Test
	public void numberStringIsConvertedToNumber() {

		assertEquals(42, Numbers.atoi("42"));
		assertEquals(147, Numbers.atoi("147"));
		assertEquals(0, Numbers.atoi("0"));
		assertEquals(1, Numbers.atoi("1"));
	}

	@Test
	public void numberIsConvertedToString() {

		assertEquals("42", Numbers.itoa(42));
		assertEquals("147", Numbers.itoa(147));
		assertEquals("0", Numbers.itoa(0));
		assertEquals("1", Numbers.itoa(1));

	}

}
