package com.dreadwail.java_learning.algorithms;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

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

    @Test
    public void correctNumberOfWordsAreCountedInSentence() {
        Str str = new Str("foo bar baz buz biz");
        assertEquals(5, str.wordCount());
    }

    @Test
    public void correctNumberOfWordsAreCountedInSentenceWithLeadingWhitespace() {
        Str str = new Str(" foo bar baz buz biz");
        assertEquals(5, str.wordCount());
    }

    @Test
    public void correctNumberOfWordsAreCountedInSentenceWithTrailingWhitespace() {
        Str str = new Str("foo bar baz buz biz ");
        assertEquals(5, str.wordCount());
    }

    @Test
    public void palindromeCorrectlyIdentified() {
        Str str = new Str("alphabetacharlie eilrahcatebahpla");
        assertTrue(str.isPalindrome());
    }

    @Test
    public void nonPalindromeCorrectlyIdentified() {
        Str str = new Str("alphabetacharlie");
        assertFalse(str.isPalindrome());
    }

    @Test
    public void canMultiplySingleDigitStrings() {
        assertEquals("10", new Str("2").multiply("5"));
    }

    @Test
    public void canMultiplyDoubleDigitAgainstSingleDigit() {
        assertEquals("24", new Str("12").multiply("2"));
    }

    @Test
    public void canMultiplyDoubleDigitAgainstDoubleDigit() {
        assertEquals("156", new Str("12").multiply("13"));
    }

    @Test
    public void canMultiplyBigIntegers() {
        assertEquals("999999999998000000000001", new Str("999999999999").multiply("999999999999"));
    }

}
