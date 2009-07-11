package com.benlakey.java_learning.algorithms;

public class Strings {

	public static int strstr(String haystack, String needle) {
		
		char[] haystackChars = haystack.toCharArray();
		char[] needleChars = needle.toCharArray();
		
		if(haystackChars.length == 0 || haystackChars.length < needleChars.length) {
			return -1;
		}

		int hPtr = 0;
		int nPtr = 0;
		
		while(hPtr < haystackChars.length && nPtr < needleChars.length) {
			
			if(haystackChars[hPtr] == needleChars[nPtr]) {
				nPtr++;
			} else {
				nPtr = 0;
			}
			
			hPtr++;
		}
		
		if(nPtr == needleChars.length) {
			return hPtr - needleChars.length;
		}
		
		return -1;
	}
	
	//O(n) (linear time)
	public static String reverseStringInPlace(String input) {

		char[] inputChars = input.toCharArray();
		
		int len = inputChars.length;
		
		for(int i = 0; i < len / 2; i++) {
			char tmp = inputChars[i];
			inputChars[i] = inputChars[len - 1 - i];
			inputChars[len - 1 - i] = tmp;
		}
		
		return new String(inputChars);
		
	}
	
	//O(n) (linear time)
	public static String reverseSentence(String sentence) {
		
		char[] sentenceChars = sentence.toCharArray();
		
		reverseCharArray(sentenceChars, 0, sentenceChars.length);
		
		int start = 0;
		int count = 0;
		
		for(int i = 0; i < sentenceChars.length; i++) {
			
			if(Character.isWhitespace(sentenceChars[i]) || i == sentenceChars.length - 1) {
				if(i == sentenceChars.length - 1) {
					count++;
				}
				reverseCharArray(sentenceChars, start, count);
				start = i + 1;
				count = 0;
			} else {
				count++;
			}
			
		}
		
		return new String(sentenceChars);
	}
	
	private static void reverseCharArray(char[] array, int start, int count) {

		for(int i = 0; i < count / 2; i++) {
			char tmp = array[i + start];
			array[i + start] = array[count - 1 - i + start];
			array[count - 1 - i + start] = tmp;
		}
		
	}
	
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
