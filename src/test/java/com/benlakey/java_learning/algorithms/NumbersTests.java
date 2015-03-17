package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class NumbersTests {

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
