package com.benlakey.java_learning.algorithms;

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

}
