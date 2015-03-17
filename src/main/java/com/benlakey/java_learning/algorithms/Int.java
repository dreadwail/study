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

}
