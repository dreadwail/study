package com.benlakey.java_learning.datastructures;

import java.util.Arrays;
import java.util.Stack;

public class BinaryTreeIterator<TKey, TValue> {

    enum Traversal {
        INORDER
    }

    private final Traversal traversal;
    private final Stack<BinaryTree.Node<TKey, TValue>> stack;
    private BinaryTree.Node<TKey, TValue> current;

    public BinaryTreeIterator(BinaryTree.Node<TKey, TValue> root, Traversal traversal) {
        this.traversal = traversal;
        stack = new Stack<BinaryTree.Node<TKey, TValue>>();
        current = root;
    }

    public boolean hasNext() {
        return current != null || !stack.empty();
    }

    public TValue next() {
        if(traversal == Traversal.INORDER) {
            return nextInorder();
        }
        throw new UnsupportedOperationException("Supported traversals: " + Arrays.toString(Traversal.values()));
    }

    private TValue nextInorder() {
        while(current != null) {
            stack.push(current);
            current = current.getLeft();
        }
        current = stack.pop();
        BinaryTree.Node<TKey, TValue> result = current;
        current = current.getRight();
        return result.getValue();
    }

}
