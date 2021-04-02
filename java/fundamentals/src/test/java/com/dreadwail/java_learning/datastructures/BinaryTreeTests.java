package com.dreadwail.java_learning.datastructures;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.dreadwail.java_learning.datastructures.BinaryTree;
import com.dreadwail.java_learning.datastructures.NodeParser;

public class BinaryTreeTests {
	
	@Test
	public void canFindMaxDepthOfBinaryTree() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(3, "beta");
		tree.add(7, "charlie");
		tree.add(1, "delta");
		tree.add(4, "echo");
		
		assertEquals(3, tree.getMaxDepth());
		
	}

	@Test
	public void mirrorTreeIsIdentified() {
		
		BinaryTree.Node<Integer, String> root = new BinaryTree.Node<Integer, String>(5, "alpha");
		
		BinaryTree.Node<Integer, String> left = new BinaryTree.Node<Integer, String>(3, "beta");
		left.setLeft(new BinaryTree.Node<Integer, String>(2, "charlie"));
		left.setRight(new BinaryTree.Node<Integer, String>(4, "delta"));
		
		BinaryTree.Node<Integer, String> right = new BinaryTree.Node<Integer, String>(3, "echo");
		right.setLeft(new BinaryTree.Node<Integer, String>(4, "foxtrot"));
		right.setRight(new BinaryTree.Node<Integer, String>(2, "golf"));

		root.setLeft(left);
		root.setRight(right);
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		tree.addNode(root);

		boolean isMirror = tree.isMirrorTree();
		
		assertTrue(isMirror);
		
	}
	
	@Test
	public void nonMirrorTreeIsIdentified() {
		
		BinaryTree.Node<Integer, String> root = new BinaryTree.Node<Integer, String>(5, "alpha");
		
		BinaryTree.Node<Integer, String> left = new BinaryTree.Node<Integer, String>(3, "beta");
		left.setLeft(new BinaryTree.Node<Integer, String>(2, "charlie"));
		left.setRight(new BinaryTree.Node<Integer, String>(8, "delta"));
		
		BinaryTree.Node<Integer, String> right = new BinaryTree.Node<Integer, String>(3, "echo");
		right.setLeft(new BinaryTree.Node<Integer, String>(4, "foxtrot"));

		root.setLeft(left);
		root.setRight(right);
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		tree.addNode(root);
		
		boolean isMirror = tree.isMirrorTree();
		
		assertFalse(isMirror);
		
	}
	
	@Test
	public void validBinarySearchTreeIsIdentified() {
		
		BinaryTree.Node<Integer, String> root = new BinaryTree.Node<Integer, String>(5, "alpha");
		
		BinaryTree.Node<Integer, String> left = new BinaryTree.Node<Integer, String>(3, "beta");
		left.setLeft(new BinaryTree.Node<Integer, String>(2, "charlie"));
		left.setRight(new BinaryTree.Node<Integer, String>(4, "delta"));
		
		BinaryTree.Node<Integer, String> right = new BinaryTree.Node<Integer, String>(7, "echo");
		right.setLeft(new BinaryTree.Node<Integer, String>(6, "foxtrot"));
		right.setRight(new BinaryTree.Node<Integer, String>(8, "golf"));

		root.setLeft(left);
		root.setRight(right);
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		tree.addNode(root);
		
		boolean isValid = tree.isValidBinarySearchTree();
		
		assertTrue(isValid);
		
	}
	
	@Test
	public void inValidBinarySearchTreeIsIdentified() {
		
		BinaryTree.Node<Integer, String> root = new BinaryTree.Node<Integer, String>(5, "alpha");
		
		BinaryTree.Node<Integer, String> left = new BinaryTree.Node<Integer, String>(3, "beta");
		left.setLeft(new BinaryTree.Node<Integer, String>(2, "charlie"));
		left.setRight(new BinaryTree.Node<Integer, String>(4, "delta"));
		
		BinaryTree.Node<Integer, String> right = new BinaryTree.Node<Integer, String>(7, "echo");
		right.setLeft(new BinaryTree.Node<Integer, String>(6, "foxtrot"));
		right.setRight(new BinaryTree.Node<Integer, String>(1, "golf"));

		root.setLeft(left);
		root.setRight(right);
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		tree.addNode(root);
		
		boolean isValid = tree.isValidBinarySearchTree();
		
		assertFalse(isValid);
		
	}
	
	@Test
	public void canAddItemsToTree() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(1, "delta");
		
		String expected = "alpha beta delta charlie";
		String actual = getPreorderString(tree);

		assertEquals(expected, actual);
		
	}

	@Test
	public void canFindDataInTreeByKey() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(3, "echo");
		tree.add(1, "delta");
		
		String expected = "echo";
		String found = tree.find(3);

		assertEquals(expected, found);
		
	}
	
	@Test
	public void rootNodeCanBeDeleted() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(3, "echo");
		
		tree.delete(5);

		String expected = "charlie beta echo";
		String actual = getPreorderString(tree);
		
		assertEquals(expected, actual);
		
	}
	
	@Test
	public void innerNodeCanBeDeleted() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(3, "echo");
		
		tree.delete(2);

		String expected = "alpha echo charlie";
		String actual = getPreorderString(tree);
		
		assertEquals(expected, actual);
		
	}
	
	@Test
	public void leafNodeCanBeDeleted() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(1, "delta");
		
		tree.delete(1);
		
		String expected = "alpha beta charlie";
		String actual = getPreorderString(tree);
		
		assertEquals(expected, actual);
		
	}
	
	@Test
	public void canPerformPreorderTraversal() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(1, "delta");
		tree.add(3, "echo");
		
		String expected = "alpha beta delta echo charlie";
		String actual = getPreorderString(tree);

		assertEquals(expected, actual);
		
	}
	
	@Test
	public void canPerformInorderTraversal() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(1, "delta");
		tree.add(3, "echo");
		
		String expected = "delta beta echo alpha charlie";
		String actual = getInorderString(tree);

		assertEquals(expected, actual);
		
	}
	
	@Test
	public void canPerformPostorderTraversal() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(1, "delta");
		tree.add(3, "echo");
		
		String expected = "delta echo beta charlie alpha";
		String actual = getPostorderString(tree);

		assertEquals(expected, actual);
		
	}
	
	@Test
	public void canPerformLevelorderTraversal() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(1, "delta");
		tree.add(3, "echo");
		
		String expected = "alpha beta charlie delta echo";
		String actual = getLevelorderString(tree);

		assertEquals(expected, actual);
		
	}
	
	@Test
	public void canSerializeTreeToString() {
		
		BinaryTree<Integer, String> tree = new BinaryTree<Integer, String>();
		
		tree.add(5, "alpha");
		tree.add(2, "beta");
		tree.add(6, "charlie");
		tree.add(1, "delta");
		tree.add(3, "echo");
		
		String expected = "5:alpha 2:beta 1:delta null:null null:null 3:echo null:null null:null 6:charlie null:null null:null";
		String actual = tree.serialize();

		assertEquals(expected, actual);
		
	}
	
	@Test
	public void canDeserializeStringToTree() {
		
		String treeString = "5:alpha 2:beta 1:delta null:null null:null 3:echo null:null null:null 6:charlie null:null null:null";

		BinaryTree<Integer, String> tree = BinaryTree.<Integer, String>deserialize(treeString, new NodeParser<Integer, String>() {
			public BinaryTree.Node<Integer, String> parse(String nodeToken) {
				String[] parts = nodeToken.split(":");
				if(parts[0].equals("null")) {
					return null;
				}
				Integer key = new Integer(parts[0]);
				String value = parts[1];
				return new BinaryTree.Node<Integer,String>(key, value);
			}
		});
		
		BinaryTree.Node<Integer, String> root = tree.getRoot();
		
		assertEquals(new Integer(5), root.getKey());
		assertEquals("alpha", root.getValue());
		
		assertEquals(new Integer(2), root.getLeft().getKey());
		assertEquals("beta", root.getLeft().getValue());
		
		assertEquals(new Integer(1), root.getLeft().getLeft().getKey());
		assertEquals("delta", root.getLeft().getLeft().getValue());
		
		assertEquals(new Integer(3), root.getLeft().getRight().getKey());
		assertEquals("echo", root.getLeft().getRight().getValue());
		
		assertEquals(new Integer(6), root.getRight().getKey());
		assertEquals("charlie", root.getRight().getValue());
		
	}
	
	private static String getPreorderString(BinaryTree<Integer, String> tree) {
		
		final StringBuffer buffer = new StringBuffer();
		tree.visitPreorder(getStringBufferVisitor(buffer));
		String actual = buffer.toString().trim();
		return actual;

	}
	
	private static String getInorderString(BinaryTree<Integer, String> tree) {
		
		final StringBuffer buffer = new StringBuffer();
		tree.visitInorder(getStringBufferVisitor(buffer));
		String actual = buffer.toString().trim();
		return actual;

	}
	
	private static String getPostorderString(BinaryTree<Integer, String> tree) {
		
		final StringBuffer buffer = new StringBuffer();
		tree.visitPostorder(getStringBufferVisitor(buffer));
		String actual = buffer.toString().trim();
		return actual;

	}
	
	private static String getLevelorderString(BinaryTree<Integer, String> tree) {
		
		final StringBuffer buffer = new StringBuffer();
		tree.visitLevelorder(getStringBufferVisitor(buffer));
		String actual = buffer.toString().trim();
		return actual;

	}
	
	private static BinaryTree.Visitor<Integer, String> getStringBufferVisitor(final StringBuffer buffer) {
		
		return new BinaryTree.Visitor<Integer, String>() {
			public void visit(BinaryTree.Node<Integer, String> node) {
				buffer.append(node.getValue() + " ");
			}
		};
		
	}
	
}
