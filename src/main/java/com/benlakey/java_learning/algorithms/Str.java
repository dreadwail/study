package com.benlakey.java_learning.algorithms;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.benlakey.java_learning.algorithms.Enumerable.Functor;


public class Str {

    private char[] wrapped;

    public Str(String str) {
        wrapped = str.toCharArray();
    }

    public static String add(String ... toSum) {
        return add(Arrays.asList(toSum));
    }
    public static String add(List<String> toSum) {

        String result = "";

        int currentAdderIndexOffset = 0;
        int carry = 0;
        while(true) {
            final int offset = currentAdderIndexOffset;
            List<Integer> digitsHere = new Enumerable<String>(toSum)
                .map(new Functor<String, Integer>() {
                    public Integer apply(String input) {
                        int index = input.length() - 1 - offset;
                        if(index < 0) {
                            return null;
                        }
                        return input.charAt(index) - '0';
                    }
                })
                .compact()
                .getValues();

            if(digitsHere.isEmpty() && carry == 0) {
                break;
            }
            int digitSum = carry;
            for(Integer digit : digitsHere) {
                digitSum += digit;
            }
            int keep = digitSum % 10;
            result = keep + result;
            carry = digitSum / 10;
            currentAdderIndexOffset++;
        }
        return result;
    }

    public String multiply(String factorString) {
        char[] factor = factorString.toCharArray();

        List<String> interimResults = new ArrayList<String>();

        for(int factorPointer = factor.length - 1; factorPointer >= 0; factorPointer--) {
            int carry = 0;
            String interimResult = "";
            for(int wrappedPointer = wrapped.length - 1; wrappedPointer >= 0; wrappedPointer--) {
                int factorDigit = factor[factorPointer] - '0';
                int wrappedDigit = wrapped[wrappedPointer] - '0';
                int product = (factorDigit * wrappedDigit) + carry;
                int toPrepend = product % 10;
                carry = product / 10;
                interimResult = toPrepend + interimResult;
            }
            for(int i = 0; i < factor.length - 1 - factorPointer; i++) {
                interimResult += '0';
            }
            if(carry > 0) {
                interimResult = carry + interimResult;
            }
            interimResults.add(interimResult);
        }

        return Str.add(interimResults);
    }

    public boolean isPalindrome() {
        int totalChars = wrapped.length;
        for(int i = 0; i < totalChars / 2; i++) {
            if(wrapped[i] != wrapped[totalChars - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    public int wordCount() {
        int wordCount = 0;
        boolean inWord = false;
        for(int i = 0; i < wrapped.length; i++) {
            if(Character.isWhitespace(wrapped[i])) {
                if(inWord) {
                    wordCount++;
                }
                inWord = false;
            } else {
                inWord = true;
            }

        }
        if(inWord) {
            wordCount++;
        }
        return wordCount;
    }

    public void reverseSentence() {
        reverseCharArray(wrapped, 0, wrapped.length);

        int start = 0;
        int count = 0;

        for(int i = 0; i < wrapped.length; i++) {
            if(Character.isWhitespace(wrapped[i]) || i == wrapped.length - 1) {
                if(i == wrapped.length - 1) {
                    count++;
                }
                reverseCharArray(wrapped, start, count);
                start = i + 1;
                count = 0;
            } else {
                count++;
            }
        }
    }

    public void reverse() {
        int len = wrapped.length;
        for(int i = 0; i < len / 2; i++) {
            char tmp = wrapped[i];
            wrapped[i] = wrapped[len - 1 - i];
            wrapped[len - 1 - i] = tmp;
        }
    }

    public int toInt() {
        int currentMultiplier = 1;
        int sum = 0;
        for(int i = 0; i < wrapped.length; i++) {
            char currentChar = wrapped[wrapped.length - 1 - i];
            sum += (currentChar - '0') * currentMultiplier;
            currentMultiplier *= 10;
        }
        return sum;
    }

    public int indexOf(String target) {

        char[] needleChars = target.toCharArray();

        if(wrapped.length == 0 || wrapped.length < needleChars.length) {
            return -1;
        }

        int hPtr = 0;
        int nPtr = 0;

        while(hPtr < wrapped.length && nPtr < needleChars.length) {

            if(wrapped[hPtr] == needleChars[nPtr]) {
                nPtr++;
            } else {
                nPtr = 0;
            }

            hPtr++;
        }

        if(nPtr == needleChars.length) {
            return hPtr - needleChars.length;
        }

        return -1;
    }

    @Override
    public String toString() {
        return new String(wrapped);
    }

    private static void reverseCharArray(char[] array, int start, int count) {

        for(int i = 0; i < count / 2; i++) {
            char tmp = array[i + start];
            array[i + start] = array[count - 1 - i + start];
            array[count - 1 - i + start] = tmp;
        }

    }

}
