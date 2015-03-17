package com.benlakey.java_learning.algorithms;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class StrTests {

    @Test
    public void zeroStringIsConvertedToNumber() {
        assertEquals(0, new Str("0").toInt());
    }

    @Test
    public void oneStringIsConvertedToNumber() {
        assertEquals(1, new Str("1").toInt());
    }

    @Test
    public void numberStringIsConvertedToNumber() {
        assertEquals(42, new Str("42").toInt());
    }

}
