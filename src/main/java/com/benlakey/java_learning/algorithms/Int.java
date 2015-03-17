package com.benlakey.java_learning.algorithms;

public class Int {

    private int value;

    public Int(int value) {
        this.value = value;
    }

    public int numberOfSetBits() {
        int bits = 0;
        while(value > 0) {
            if(value % 2 != 0) {
                bits++;
            }
            value /= 2;
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

}
