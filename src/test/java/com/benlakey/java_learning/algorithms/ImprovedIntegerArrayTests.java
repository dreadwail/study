package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ImprovedIntegerArrayTests {

    @Test
    public void duplicateNumberInRangeArray() {
        ImprovedIntegerArray array = new ImprovedIntegerArray(1, 4, 2, 3, 4, 5);
        assertEquals(4, array.findNumberRepeatedInRangeArray().intValue());
    }

    @Test
    public void numberRepeatedOddNumberOfTimesIsFound() throws Exception {
        ImprovedIntegerArray array = new ImprovedIntegerArray(2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4);
        assertEquals(3, array.findNumberRepeatedOddTimes().intValue());

    }

}
