package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class IntTests {

    @Test
    public void canFindCountOfBitsInNumbers() {
        assertEquals(3, new Int(7).numberOfSetBits());
        assertEquals(2, new Int(5).numberOfSetBits());
        assertEquals(1, new Int(16).numberOfSetBits());
    }

    @Test
    public void canIdentifyNumberOfBitsInZero() {
        assertEquals(0, new Int(0).numberOfSetBits());
    }

}
