package com.dreadwail.java_learning.algorithms;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

import com.dreadwail.java_learning.algorithms.Enumerable.Functor;

public class EnumerableTests {

    Functor<Integer, Integer> identityFunctor = new Functor<Integer, Integer>() {
        public Integer apply(Integer input) {
            return input;
        }
    };

    Functor<Integer, Integer> duplicatingFunctor = new Functor<Integer, Integer>() {
        public Integer apply(Integer input) {
            return input * 2;
        }
    };

    @Test
    public void canGetValues() {
        List<Integer> compacted = new Enumerable<Integer>(1, 2, 3).getValues();
        assertThat(compacted, is(Arrays.asList(1, 2, 3)));
    }

    @Test
    public void canMapEmptyToEmpty() {
        List<Integer> mapped = new Enumerable<Integer>().map(identityFunctor).getValues();
        assertThat(mapped, is(Arrays.<Integer>asList()));
    }

    @Test
    public void canMapSingleToSingle() {
        List<Integer> mapped = new Enumerable<Integer>(42).map(identityFunctor).getValues();
        assertThat(mapped, is(Arrays.asList(42)));
    }

    @Test
    public void canMapUsingNonIdentityFunctor() {
        List<Integer> mapped = new Enumerable<Integer>(42).map(duplicatingFunctor).getValues();
        assertThat(mapped, is(Arrays.asList(84)));
    }

    @Test
    public void canCompactListWithNoNulls() {
        List<Integer> compacted = new Enumerable<Integer>(1, 2, 3).compact().getValues();
        assertThat(compacted, is(Arrays.asList(1, 2, 3)));
    }

    @Test
    public void canCompactListWithNulls() {
        List<Integer> compacted = new Enumerable<Integer>(1, null, 3).compact().getValues();
        assertThat(compacted, is(Arrays.asList(1, 3)));
    }

}
