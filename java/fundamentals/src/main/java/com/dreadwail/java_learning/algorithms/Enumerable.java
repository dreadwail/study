package com.dreadwail.java_learning.algorithms;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Enumerable<T> {

    interface Functor<TIn, TOut> {
        TOut apply(TIn input);
    }

    private final List<T> values;

    public Enumerable(T ... values) {
        this.values = Arrays.asList(values);
    }

    public Enumerable(List<T> values) {
        this.values = values;
    }

    public <TOut> Enumerable<TOut> map(Functor<T, TOut> mapper) {
        List<TOut> mapped = new ArrayList<TOut>();
        for(T item : getValues()) {
            mapped.add(mapper.apply(item));
        }
        return new Enumerable<TOut>(mapped);
    }

    public Enumerable<T> compact() {
        List<T> result = new ArrayList<T>();
        for(T item : values) {
            if(item != null) {
                result.add(item);
            }
        }
        return new Enumerable<T>(result);
    }

    public List<T> getValues() {
        return values;
    }

}
