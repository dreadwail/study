package com.benlakey.java_learning.datastructures;

import static org.junit.Assert.*;

import org.junit.Test;

public class CacheTests {
    
    private static final int TEST_CACHE_SIZE = 100;

    @Test
    public void canStoreAndRetrieve() {
        Cache cache = new Cache(TEST_CACHE_SIZE);
        String value = "bar";
        cache.store("foo", value);
        assertSame(value, cache.get("foo"));
    }
    
    @Test
    public void loadCanBeIdentified() {
        Cache cache = new Cache(TEST_CACHE_SIZE);
        cache.store("foo", "bar");
        assertEquals(1, cache.size());
        cache.store("baz", "buz");
        assertEquals(2, cache.size());
    }
    
    @Test
    public void maximumCapacityRespected() {
        Cache cache = new Cache(2);
        cache.store("foo", "bar");
        cache.store("baz", "buz");
        cache.store("biz", "boz");
        assertEquals(2, cache.size());
    }
    
    @Test
    public void oldestValueIsEvictedIfCacheIsFull() {
        Cache cache = new Cache(2);
        String first = "alpha";
        cache.store("one", first);
        cache.store("two", "beta");
        assertEquals(first, cache.get("one"));
        cache.store("three", "charlie");
        assertNull(cache.get("one"));
    }
    
}