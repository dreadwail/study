package com.benlakey.java_learning.algorithms;

public class IntegerArray extends Array<Integer> {

    public IntegerArray(Integer ... array) {
        super(Integer.class, array);
    }

    public Integer findNumberRepeatedInRangeArray() {
        if(wrapped.length < 2) {
            return null;
        }
        int sum = 0;
        int largest = 0;
        for(int i = 0; i < wrapped.length; i++) {
            if(wrapped[i] >= largest) {
                largest = wrapped[i];
            }
            sum += wrapped[i];
        }
        int expected = (largest * (largest + 1)) / 2;
        return sum - expected;
    }

    public Integer findNumberRepeatedOddTimes() throws Exception {
        if(wrapped.length == 0) {
            return null;
        }
        int valueBits = wrapped[0];
        for(int i = 1; i < wrapped.length; i++) {
            valueBits = valueBits ^ wrapped[i];
        }
        if(valueBits == 0) {
            return null;
        }
        return valueBits;
    }

}
