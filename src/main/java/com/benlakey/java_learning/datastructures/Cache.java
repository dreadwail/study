package com.benlakey.java_learning.datastructures;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

public class Cache {
    
    private final Queue<String> keys;
    private final Map<String, Object> storage;
    private int maxSize;
    
    public Cache(int maxSize) {
        this.maxSize = maxSize;
        this.keys = new LinkedList<String>();
        this.storage = new HashMap<String, Object>();
    }

    public void store(String key, Object value) {
        if(size() == maxSize) {
            String oldest = keys.poll();
            storage.remove(oldest);
        }
        keys.offer(key);
        storage.put(key, value);
    }

    public Object get(String key) {
        return storage.get(key);
    }

    public int size() {
        return keys.size();
    }

}