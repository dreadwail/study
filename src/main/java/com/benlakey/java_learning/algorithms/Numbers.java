package com.benlakey.java_learning.algorithms;

public class Numbers {

	public static int[] getPrimes(int numberOfPrimesToGet) {

		int[] primes = new int[numberOfPrimesToGet];
		int currentPrimeIdx = 0;

		int toCheck = 2;

		while(currentPrimeIdx < numberOfPrimesToGet) {

			boolean isPrime = true;

			for(int i = toCheck - 1; i > 1; i--) {
				if(toCheck % i == 0) {
					isPrime = false;
					break;
				}
			}

			if(isPrime) {
				primes[currentPrimeIdx] = toCheck;
				currentPrimeIdx++;
			}

			toCheck++;
		}

		return primes;

	}

	public static String itoa(int num) {

		int largestDivisor = 1;

		while(num / (largestDivisor * 10) != 0) {
			largestDivisor *= 10;
		}

		String str = "";

		for(int divisor = largestDivisor; divisor > 0; divisor /= 10) {
			//this stuff is cheezy/cheaty, but is here for demonstration.
			char[] resultChars = ("" + (num / divisor)).toCharArray();
			str += resultChars[resultChars.length - 1];
		}

		return str;

	}
}
