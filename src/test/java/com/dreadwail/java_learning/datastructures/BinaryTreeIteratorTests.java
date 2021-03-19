package com.dreadwail.java_learning.datastructures;

import static org.junit.Assert.assertArrayEquals;

import org.junit.Test;

import com.dreadwail.java_learning.datastructures.BinaryTreeIterator.Traversal;

public class BinaryTreeIteratorTests {

    @Test
    public void canIterateInorder() {
        BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
        tree.add(5, "little");
        tree.add(3, "had");
        tree.add(1, "mary");
        tree.add(4, "a");
        tree.add(7, "lamb");

        BinaryTreeIterator<Integer, String> iterator = new BinaryTreeIterator<Integer, String>(tree.getRoot(), Traversal.INORDER);

        String[] result = new String[5];
        int i = 0;
        while(iterator.hasNext()) {
            result[i] = iterator.next();
            i++;
        }

        assertArrayEquals(new String[] { "mary", "had", "a", "little", "lamb" }, result);
    }

}
