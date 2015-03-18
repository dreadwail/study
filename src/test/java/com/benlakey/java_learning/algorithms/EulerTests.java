package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class EulerTests {

    @Test
    public void findsSumOf3And5MultiplesLessThan10() {
        assertEquals(23, new Int(10).getSumOfMultiplesLessThan());
    }

    @Test
    public void findsSumOf3And5MultiplesLessThan1000() {
        assertEquals(233168, new Int(1000).getSumOfMultiplesLessThan());
    }

    @Test
    public void findsSumOfEvenFibsTo100() {
        assertEquals(44, new Int(100).getSumEvenFibs());
    }

    @Test
    public void findsSumOfEvenFibsTo4000000() {
        assertEquals(4613732, new Int(4000000).getSumEvenFibs());
    }

}
