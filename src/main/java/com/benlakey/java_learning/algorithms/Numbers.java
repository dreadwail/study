package com.benlakey.java_learning.algorithms;

public class Numbers {

	public static boolean IsPowerOfTwo(int num) {

		if(num == 0) {
			return false;
		}

		// When taking a power of 2 number and subtracting 1, it should cause a 'rollover' effect (ex: 100 to 011, or 1000 to 0111, etc).
		// Therefor, subtracting 1 and doing a bitwise & on a power of 2 number should make the result = 0.
		// This is because the 2 are effectively inverse binary representations.

		int oneLess = num - 1;
		if((num & oneLess) == 0) {
			return true;
		}

		return false;
	}

	public static String getBinaryRepresentation(int num) {

		String numberString = "";

		while(num > 0) {
			if(num % 2 != 0) {
				numberString = "1" + numberString;
			} else {
				numberString = "0" + numberString;
			}
			num = num / 2;
		}

		return numberString;

	}

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

	public static boolean isEven(int num) {
		return num % 2 == 0;
	}

	public static boolean isOdd(int num) {
		return !isEven(num);
	}

	public static int atoi(String numberString) {

		char[] numberStringChars = numberString.toCharArray();

		int currentMultiplier = 1;
		int sum = 0;

		for(int i = 0; i < numberStringChars.length; i++) {

			int currentIdx = numberStringChars.length - 1 - i;

			char currentChar = numberStringChars[currentIdx];
			int currentValue = currentChar - '0';

			sum += currentValue * currentMultiplier;

			currentMultiplier *= 10;
		}

		return sum;
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
