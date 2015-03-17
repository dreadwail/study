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

    public int indexOf(String target) {

        char[] haystackChars = wrapped.toCharArray();
        char[] needleChars = target.toCharArray();

        if(haystackChars.length == 0 || haystackChars.length < needleChars.length) {
            return -1;
        }

        int hPtr = 0;
        int nPtr = 0;

        while(hPtr < haystackChars.length && nPtr < needleChars.length) {

            if(haystackChars[hPtr] == needleChars[nPtr]) {
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


}
