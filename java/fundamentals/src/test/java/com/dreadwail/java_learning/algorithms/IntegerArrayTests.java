package com.dreadwail.java_learning.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class IntegerArrayTests {

    @Test
    public void duplicateNumberInRangeArray() {
        IntegerArray array = new IntegerArray(1, 4, 2, 3, 4, 5);
        assertEquals(4, array.findNumberRepeatedInRangeArray().intValue());
    }

    @Test
    public void numberRepeatedOddNumberOfTimesIsFound() throws Exception {
        IntegerArray array = new IntegerArray(2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4);
        assertEquals(3, array.findNumberRepeatedOddTimes().intValue());
    }

    @Test
    public void canFindMinimalJumps() {
        IntegerArray array = new IntegerArray(1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9);
        assertEquals(3, array.findMinimalJumps().intValue());
    }

    @Test
    public void canFindLargestContiguousSum() {
        IntegerArray array = new IntegerArray(-10, 2, 3, -2, 0, 5, -15);
        assertEquals(8, array.largestContiguousSum().intValue());
    }

}
