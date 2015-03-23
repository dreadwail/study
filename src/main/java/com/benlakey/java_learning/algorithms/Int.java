package com.benlakey.java_learning.algorithms;

public class Int {

    private int value;

    public Int(int value) {
        this.value = value;
    }

    public int getSumEvenFibs() {
        int sum = 0;
        int last = 1;
        int current = 2;
        while(current < value) {
            if(current % 2 == 0) {
                sum += current;
            }
            int prev = last;
            last = current;
            current += prev;
        }
        return sum;
    }

    public int getSumOfMultiplesLessThan() {
        int sum = 0;
        for(int i = 0; i < value; i++) {
            if(i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }

    public int numberOfSetBits() {
        int bits = 0;
        while(value > 0) {
            bits += (value & 1);
            value >>= 1;
        }
        return bits;
    }

    public boolean isPowerOfTwo() {
        if(value == 0) {
            return false;
        }
        return numberOfSetBits() == 1;
    }

    public String getBinaryRepresentation() {
        String numberString = "";
        while(value > 0) {
            if(value % 2 != 0) {
                numberString = "1" + numberString;
            } else {
                numberString = "0" + numberString;
            }
            value = value / 2;
        }
        return numberString;
    }

    public boolean isEven() {
        return value % 2 == 0;
    }

    public boolean isOdd() {
        return !isEven();
    }

    public String toString() {
        int largestDivisor = 1;
        while(value / (largestDivisor * 10) != 0) {
            largestDivisor *= 10;
        }
        String str = "";
        for(int divisor = largestDivisor; divisor > 0; divisor /= 10) {
            //this stuff is cheezy/cheaty, but is here for demonstration.
            char[] resultChars = ("" + (value / divisor)).toCharArray();
            str += resultChars[resultChars.length - 1];
        }
        return str;
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


}
