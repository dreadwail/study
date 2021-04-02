package com.dreadwail.java_learning.euler;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.dreadwail.java_learning.algorithms.Int;

public class Problem1Tests {

    @Test
    public void findsSumOf3And5MultiplesLessThan10() {
        assertEquals(23, new Int(10).getSumOfMultiplesLessThan());
    }

    @Test
    public void findsSumOf3And5MultiplesLessThan1000() {
        assertEquals(233168, new Int(1000).getSumOfMultiplesLessThan());
    }

}
