package com.benlakey.java_learning.algorithms;


public class IntegerArray extends Array<Integer> {

    public IntegerArray(Integer ... array) {
        super(Integer.class, array);
    }

    public Integer findMinimalJumps() {
        int currentIndex = 0;
        int jumps = 0;
        int maxIndex = wrapped.length - 1;

        while(currentIndex < wrapped.length) {
            int allowance = wrapped[currentIndex];
            if(currentIndex + allowance > maxIndex) {
                jumps += 1;
                break;
            }
            int startIndex = currentIndex + 1;
            int endIndex = currentIndex + allowance;
            int largestIndex = getIndexOfLargest(startIndex, endIndex);
            currentIndex = largestIndex;
            jumps += 1;
        }
        return jumps;
    }

    public Integer getIndexOfLargest(int minIndex, int maxIndex) {
        int largestIndex = minIndex;
        int largest = wrapped[minIndex];
        for(int index = minIndex; index <= maxIndex; index++) {
            int value = wrapped[index];
            if(value >= largest) {
                largest = value;
                largestIndex = index;
            }
        }
        return largestIndex;
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

    public Integer largestContiguousSum() {
        if(wrapped.length == 0) {
            return 0;
        }

        int largestSum = wrapped[0];
        int currentSum = wrapped[0];

        for(int i = 1; i < wrapped.length; i++) {
            int val = wrapped[i];
            if(val >= 0 && largestSum < 0) {
                largestSum = val;
                currentSum = val;
            } else {
                currentSum += val;
                if(currentSum > largestSum) {
                    largestSum = currentSum;
                }
            }

        }

        return largestSum;
    }

}
