package com.benlakey.java_learning.euler;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.benlakey.java_learning.algorithms.Int;

public class Problem2Tests {

    @Test
    public void findsSumOfEvenFibsTo100() {
        assertEquals(44, new Int(100).getSumEvenFibs());
    }

    @Test
    public void findsSumOfEvenFibsTo4000000() {
        assertEquals(4613732, new Int(4000000).getSumEvenFibs());
    }

}
