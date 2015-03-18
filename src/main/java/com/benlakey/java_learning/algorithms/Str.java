package com.benlakey.java_learning.algorithms;


public class Str {

    private char[] wrapped;

    public Str(String str) {
        wrapped = str.toCharArray();
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

}
