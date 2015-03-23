package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class IntTests {

    @Test
    public void canFindCountOfBitsIn7() {
        assertEquals(3, new Int(7).numberOfSetBits());
    }

    @Test
    public void canFindCountOfBitsIn5() {
        assertEquals(2, new Int(5).numberOfSetBits());
    }

    @Test
    public void canFindCountOfBitsIn16() {
        assertEquals(1, new Int(16).numberOfSetBits());
    }

    @Test
    public void canDetermineZeroSetBitsInLargeNumber() {
        assertEquals(14, new Int(537262763).numberOfSetBits());
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

    @Test
    public void zeroIsCorrectlyIdentifiedAsEven() {
        assertTrue(new Int(0).isEven());
    }

    @Test
    public void evenNumbersAreCorrectlyIdentified() {
        assertTrue(new Int(2).isEven());
    }

    @Test
    public void evenNumbersAreNotIdentifiedAsOdd() {
        assertFalse(new Int(2).isOdd());
    }

    @Test
    public void oddNumbersAreCorrectlyIdentified() {
        assertTrue(new Int(3).isOdd());
    }

    @Test
    public void oddNumbersAreNotIdentifiedAsEven() {
        assertFalse(new Int(3).isEven());
    }

    @Test
    public void zeroIsConvertedToString() {
        assertEquals("0", new Int(0).toString());
    }

    @Test
    public void oneIsConvertedToString() {
        assertEquals("1", new Int(1).toString());
    }

    @Test
    public void numberIsConvertedToString() {
        assertEquals("42", new Int(42).toString());
    }

    @Test
    public void canGetFirstNPrimes() {
        int[] primes = Int.getPrimes(5);
        assertEquals(2, primes[0]);
        assertEquals(3, primes[1]);
        assertEquals(5, primes[2]);
        assertEquals(7, primes[3]);
        assertEquals(11, primes[4]);
    }

}
