package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class StringsTests {

	@Test
	public void palindromeCorrectlyIdentified() {

		String input = "alphabetacharlie eilrahcatebahpla";

		assertTrue(Strings.isPalindrome(input));

	}

	@Test
	public void nonPalindromeCorrectlyIdentified() {

		String input = "alphabetacharlie";

		assertFalse(Strings.isPalindrome(input));

	}

}
