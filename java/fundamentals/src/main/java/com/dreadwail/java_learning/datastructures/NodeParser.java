package com.dreadwail.java_learning.datastructures;


public interface NodeParser<TKey extends Comparable<TKey>, TValue> {

	BinaryTree.Node<TKey, TValue> parse(String nodeToken);
	
}
