package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class StringsTests {

	@Test
	public void sentenceIsReversedInPlace() {

		String sentence = "mary had a little lamb";
		String expected = "lamb little a had mary";

		String reversedSentence = Strings.reverseSentenceInPlace(sentence);

		assertEquals(expected, reversedSentence);

	}

	@Test
	public void sentenceWithSpaceAtStartIsReversedInPlace() {

		String sentence = " mary had a little lamb";
		String expected = "lamb little a had mary ";

		String reversedSentence = Strings.reverseSentenceInPlace(sentence);

		assertEquals(expected, reversedSentence);

	}

	@Test
	public void sentenceWithSpaceAtEndIsReversedInPlace() {

		String sentence = "mary had a little lamb ";
		String expected = " lamb little a had mary";

		String reversedSentence = Strings.reverseSentenceInPlace(sentence);

		assertEquals(expected, reversedSentence);

	}

	@Test
	public void correctNumberOfWordsAreCountedInSentence() {

		String input = "foo bar baz buz biz";

		int count = Strings.countWords(input);

		assertEquals(5, count);
	}

	@Test
	public void correctNumberOfWordsAreCountedInSentenceWithLeadingWhitespace() {

		String input = " foo bar baz buz biz";

		int count = Strings.countWords(input);

		assertEquals(5, count);
	}

	@Test
	public void correctNumberOfWordsAreCountedInSentenceWithTrailingWhitespace() {

		String input = "foo bar baz buz biz ";

		int count = Strings.countWords(input);

		assertEquals(5, count);
	}

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
