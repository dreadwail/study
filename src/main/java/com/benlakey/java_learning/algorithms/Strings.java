package com.benlakey.java_learning.algorithms;

public class Strings {

	public static String reverseSentenceInPlace(String sentence) {

		char[] sentenceChars = sentence.toCharArray();

		//foo bar baz
		//zab rab oof
		reverseArray(sentenceChars, 0, sentenceChars.length);

		//zab rab oof
		//baz bar foo
		int lowerBoundInclusive = 0;
		int upperBoundExclusive = 0;

		for(int i = 0; i < sentenceChars.length; i++) {
			if(Character.isWhitespace(sentenceChars[i])) {
				upperBoundExclusive = i;
				reverseArray(sentenceChars, lowerBoundInclusive, upperBoundExclusive);
				lowerBoundInclusive = i + 1;
			}
		}

		if(lowerBoundInclusive != sentenceChars.length) {
			reverseArray(sentenceChars, lowerBoundInclusive, sentenceChars.length);
		}


		return new String(sentenceChars);

	}

	private static void reverseArray(char[] array, int lowerBoundInclusive, int upperBoundExclusive) {

		int length = upperBoundExclusive - lowerBoundInclusive;
		int offset = lowerBoundInclusive;

		for(int i = 0; i < length / 2; i++) {
			char tmp = array[i + offset];
			array[i + offset] = array[length - 1 - i + offset];
			array[length - 1 - i + offset] = tmp;
		}
	}

	//O(n) (linear time)
	public static int countWords(String input) {

		int wordCount = 0;

		char[] inputChars = input.toCharArray();

		boolean inWord = false;

		for(int i = 0; i < inputChars.length; i++) {

			if(Character.isWhitespace(inputChars[i])) {
				if(inWord) {
					wordCount++;
				}
				inWord = false;
			} else {
				inWord = true;
			}

		}

		if(inWord) {
			wordCount++;
		}

		return wordCount;
	}

	//O(n) (linear time)
	public static boolean isPalindrome(String input) {

		char[] inputChars = input.toCharArray();

		int totalChars = inputChars.length;

		for(int i = 0; i < totalChars / 2; i++) {
			if(inputChars[i] != inputChars[totalChars - 1 - i]) {
				return false;
			}
		}

		return true;

	}

}
