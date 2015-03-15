package com.benlakey.java_learning.algorithms;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayProxy<T extends Comparable<T>> {
    
    private Class<T> type;
    private T[] wrapped;
    
    public ArrayProxy(Class<T> type, T ... array) {
        this.type = type;
        this.wrapped = array;
    }

    public void rotateArray(int offset) {
        reverse();
        reverse(0, offset);
        reverse(offset, wrapped.length - offset);
    }
    
    private void reverse() {
        reverse(0, wrapped.length);
    }

    private void reverse(int startIdx, int count) {
        for(int i = 0; i < count / 2; i++) {
            T tmp = wrapped[startIdx + i];
            wrapped[startIdx + i] = wrapped[startIdx + count - 1 - i];
            wrapped[startIdx + count - 1 - i] = tmp;
        }
    }

    public T[] findIntersection(T ... otherArray) {

        T[] thisArray = wrapped.clone();
        otherArray = otherArray.clone();

        Arrays.sort(thisArray);
        Arrays.sort(otherArray);

        List<T> resultList = new ArrayList<T>();

        int array1idx = 0;
        int array2idx = 0;

        while(array1idx < thisArray.length && array2idx < otherArray.length) {
            T array1num = thisArray[array1idx];
            T array2num = otherArray[array2idx];

            if(array1num.compareTo(array2num) < 0) {
                array1idx++;
            } else if(array1num.compareTo(array2num) > 0) {
                array2idx++;
            } else {
                resultList.add(array1num);
                array1idx++;
                array2idx++;
            }
        }

        @SuppressWarnings("unchecked")
        T[] result = (T[])Array.newInstance(type, resultList.size());
        resultList.toArray(result);
        return result;
    }

//    
//    public static boolean binarySearch(int[] array, int startIdx, int endIdx, int toFind) {
//
//        if(array.length == 0 || startIdx < 0 || endIdx > (array.length - 1) || startIdx > endIdx) {
//            return false;
//        }
//        
//        if(startIdx == endIdx) {
//            return array[startIdx] == toFind;
//        }
//        
//        int halfIdx = startIdx + ((endIdx - startIdx) / 2);
//        
//        if(array[halfIdx] == toFind) { 
//            return true;
//        }
//        
//        if(toFind < array[halfIdx]) {
//            return binarySearch(array, startIdx, halfIdx - 1, toFind);
//        }
//        
//        if(array[halfIdx] <= toFind) {
//            return binarySearch(array, halfIdx + 1, endIdx, toFind);
//        }
//        
//        return false;
//    }
//    
//    public static int[] mergeSortedArrays(int[] arrayOne, int[] arrayTwo) {
//        
//        int[] newArray = new int[arrayOne.length + arrayTwo.length];
//        
//        int arrayOnePtr = 0;
//        int arrayTwoPtr = 0;
//        int newArrayPtr = 0;
//        
//        while(arrayOnePtr < arrayOne.length || arrayTwoPtr < arrayTwo.length) {
//            
//            if(arrayOnePtr == arrayOne.length) {
//                newArray[newArrayPtr] = arrayTwo[arrayTwoPtr];
//                arrayTwoPtr++;
//            } else if(arrayTwoPtr == arrayTwo.length) {
//                newArray[newArrayPtr] = arrayOne[arrayOnePtr];
//                arrayOnePtr++;
//            } else {
//                
//                int arrayOneValue = arrayOne[arrayOnePtr];
//                int arrayTwoValue = arrayTwo[arrayTwoPtr];
//                
//                if(arrayOneValue <= arrayTwoValue) {
//                    newArray[newArrayPtr] = arrayOneValue;
//                    arrayOnePtr++;
//                } else {
//                    newArray[newArrayPtr] = arrayTwoValue;
//                    arrayTwoPtr++;
//                }
//                
//            }
//            
//            newArrayPtr++;
//            
//        }
//        
//        return newArray;
//        
//    }
//
//    public static long findElementRepeatedInSortedContiguousArray(int[] array, int maxValue) {
//        
//        long sum = 0;
//        
//        for(int i = 0; i < array.length; i++) {
//            sum += array[i];
//        }
//        
//        long expected = (maxValue * (maxValue + 1)) / 2;
//        
//        return sum - expected;
//        
//    }
//    
//    public static int findElementRepeatedOddTimes(int[] array) throws Exception {
//        
//        if(array.length == 0) {
//            throw new IllegalArgumentException("Empty array!");
//        }
//        
//        int valueBits = array[0];
//        
//        for(int i = 1; i < array.length; i++) {
//            valueBits = valueBits ^ array[i];
//        }
//        
//        if(valueBits == 0) {
//            throw new Exception("No odd repeating!");
//        }
//        
//        return valueBits;
//    }
    
}
