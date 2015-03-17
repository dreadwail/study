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

}
