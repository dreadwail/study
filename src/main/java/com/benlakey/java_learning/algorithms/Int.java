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

}
