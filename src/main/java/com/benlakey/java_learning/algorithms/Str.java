package com.benlakey.java_learning.algorithms;


public class Str {

    private char[] wrapped;

    public Str(String str) {
        wrapped = str.toCharArray();
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
