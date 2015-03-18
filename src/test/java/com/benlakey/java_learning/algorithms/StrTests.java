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

    @Test
    public void canFindSubstring() {
        assertEquals(11, new Str("mary had a little lamb").indexOf("little"));
    }

    @Test
    public void impossibleSubstringCausesNegativeOneReturn() {
        assertEquals(-1, new Str("").indexOf("foo"));
    }

    @Test
    public void nonExistantSubstringCausesNegativeOneReturn() {
        assertEquals(-1, new Str("mary had a little lamb").indexOf("foo"));
    }

    @Test
    public void stringWithOddCharacterCountIsReversedInPlace() {
        Str str = new Str("abc def");
        str.reverse();
        assertEquals("fed cba", str.toString());
    }

    @Test
    public void stringWithEvenCharacterCountIsReversedInPlace() {
        Str str = new Str("abc de");
        str.reverse();
        assertEquals("ed cba", str.toString());
    }

    @Test
    public void emptyStringDoesNotThrowExceptionWhenReversed() {
        Str str = new Str("");
        str.reverse();
        assertEquals("", str.toString());
    }

    @Test
    public void sentenceIsReversed() {
        Str sentence = new Str("mary had a little lamb");
        sentence.reverseSentence();
        assertEquals("lamb little a had mary", sentence.toString());
    }

}
