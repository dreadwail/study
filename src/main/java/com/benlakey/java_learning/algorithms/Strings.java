package com.benlakey.java_learning.algorithms;

public class Strings {

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
