package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

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

    @Test
    public void zeroDoesNotGetIdentifiedAsPowerOfTwo() {
        assertFalse(new Int(0).isPowerOfTwo());
    }

    @Test
    public void correctNumbersAreIdentifiedAsBeingPowerOfTwo() {
        assertTrue(new Int(1).isPowerOfTwo());
        assertTrue(new Int(2).isPowerOfTwo());
        assertTrue(new Int(4).isPowerOfTwo());
        assertTrue(new Int(8).isPowerOfTwo());
        assertTrue(new Int(16).isPowerOfTwo());
        assertTrue(new Int(32).isPowerOfTwo());
    }

    @Test
    public void binaryRepresentationOfZeroIsCorrect() {
        assertEquals("", new Int(0).getBinaryRepresentation());
    }

    @Test
    public void binaryRepresentationOfNonZeroNumbersIsCorrect() {
        assertEquals("101111", new Int(47).getBinaryRepresentation());
    }

}
