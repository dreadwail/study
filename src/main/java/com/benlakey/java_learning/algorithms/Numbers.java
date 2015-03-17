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

}
