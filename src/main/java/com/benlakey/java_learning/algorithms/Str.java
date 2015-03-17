package com.benlakey.java_learning.algorithms;


public class Str {

    private String wrapped;

    public Str(String str) {
        wrapped = str;
    }

    public int toInt() {
        char[] numberStringChars = wrapped.toCharArray();

        int currentMultiplier = 1;
        int sum = 0;

        for(int i = 0; i < numberStringChars.length; i++) {
            char currentChar = numberStringChars[numberStringChars.length - 1 - i];
            sum += (currentChar - '0') * currentMultiplier;
            currentMultiplier *= 10;
        }

        return sum;
    }


}
