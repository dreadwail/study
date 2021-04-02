package com.dreadwail.java_learning.datastructures;

import java.util.Queue;
import java.util.Stack;

public class BinaryTree<TKey extends Comparable<TKey>, TValue> {

    public interface Visitor<TKey extends Comparable<TKey>, TValue> {
        void visit(BinaryTree.Node<TKey, TValue> node);
    }
    
    static class Node<TNodeKey, TNodeValue> {
        
        private final TNodeKey key;
        private final TNodeValue value;
        private Node<TNodeKey, TNodeValue> left;
        private Node<TNodeKey, TNodeValue> right;
        
        public Node(TNodeKey key, TNodeValue value) {
            this.key = key;
            this.value = value;
        }

        public Node<TNodeKey, TNodeValue> getLeft() {
            return left;
        }

        public void setLeft(Node<TNodeKey, TNodeValue> left) {
            this.left = left;
        }

        public Node<TNodeKey, TNodeValue> getRight() {
            return right;
        }

        public void setRight(Node<TNodeKey, TNodeValue> right) {
            this.right = right;
        }

        public TNodeKey getKey() {
            return key;
        }

        public TNodeValue getValue() {
            return value;
        }
        
    }

	private static class IndexReference {
		public int index;
		public IndexReference(int index) {
			this.index = index;
		}
	}
	
	private Node<TKey, TValue> root;
	
	public Node<TKey, TValue> getRoot() {
		return this.root;
	}
	
	public int getMaxDepth() {
		return this.getMaxDepth(this.root);
	}
	
	private int getMaxDepth(Node<TKey, TValue> current) {
		
		if(current == null) {
			return 0;
		}
		
		int leftSubtreeCount = 1 + this.getMaxDepth(current.getLeft());
		int rightSubtreeCount = 1 + this.getMaxDepth(current.getRight());
		
		if(leftSubtreeCount >= rightSubtreeCount) {
			return leftSubtreeCount;
		}
		
		return rightSubtreeCount;
	}
	
	public String serialize() {
		
		if(this.root == null) {
			return "";
		}
		
		StringBuffer buffer = new StringBuffer();
		
		Stack<Node<TKey, TValue>> stack = new Stack<Node<TKey, TValue>>();
		stack.push(this.root);
		
		while(stack.size() > 0) {
			
		    Node<TKey, TValue> popped = stack.pop();
			if(popped == null) {
				buffer.append("null:null ");
				continue;
			}
			
			buffer.append(popped.getKey() + ":" + popped.getValue() + " ");
			
			stack.push(popped.getRight());
			stack.push(popped.getLeft());
			
		}

		return buffer.toString().trim();
		
	}
	
	public static <TKey extends Comparable<TKey>, TValue> BinaryTree<TKey, TValue> deserialize(
			String treeString, 
			NodeParser<TKey, TValue> nodeParser) {
		
		if(treeString == null || treeString == "") {
			return null;
		}
		
		String[] tokens = treeString.split(" ");
		if(tokens.length == 0) { 
			return null;
		}
		
		IndexReference ref = new IndexReference(0);
		
		Node<TKey, TValue> root = nodeParser.parse(tokens[ref.index++]);

		Stack<Node<TKey, TValue>> stack = new Stack<Node<TKey, TValue>>();
		
		Node<TKey, TValue> current = root;
		
		while(stack.size() > 0 || current != null) {
			
			if(current != null) {
				stack.push(current);
				current.setLeft(nodeParser.parse(tokens[ref.index++]));
				current = current.getLeft();
			} else {
				current = stack.pop();
				current.setRight(nodeParser.parse(tokens[ref.index++]));
				current = current.getRight();
			}

		}
		
		BinaryTree<TKey, TValue> tree = new BinaryTree<TKey, TValue>();
		tree.addNode(root);
		
		return tree;
		
	}
	
	public void visitPreorder(Visitor<TKey, TValue> visitor) {
		
		if(this.root == null) {
			return;
		}
		
		Stack<Node<TKey, TValue>> stack = new Stack<Node<TKey, TValue>>();
		stack.push(this.root);
		
		while(stack.size() > 0) {
			
			Node<TKey, TValue> popped = stack.pop();
			
			visitor.visit(popped);
			
			if(popped.getRight() != null) {
				stack.push(popped.getRight());
			}
			
			if(popped.getLeft() != null) {
				stack.push(popped.getLeft());
			}

		}
		
	}
	
	public void visitInorder(Visitor<TKey, TValue> visitor) {
		
		if(this.root == null) {
			return;
		}
		
		Stack<Node<TKey, TValue>> stack = new Stack<Node<TKey, TValue>>();
		
		Node<TKey, TValue> current = this.root;
		
		while(stack.size() > 0 || current != null) {
			
			if(current != null) {
				stack.push(current);
				current = current.getLeft();
			} else {
				current = stack.pop();
				visitor.visit(current);
				current = current.getRight();
			}
			
		}
		
	}
	
	public void visitPostorder(Visitor<TKey, TValue> visitor) {
		
		if(this.root == null) {
			return;
		}
		
		Stack<Node<TKey, TValue>> stack = new Stack<Node<TKey, TValue>>();
		stack.push(this.root);
		
		Stack<Node<TKey, TValue>> output = new Stack<Node<TKey, TValue>>();
		
		while(stack.size() > 0) {
			
			Node<TKey, TValue> popped = stack.pop();
			output.push(popped);

			if(popped.getLeft() != null) {
				stack.push(popped.getLeft());
			}
			
			if(popped.getRight() != null) {
				stack.push(popped.getRight());
			}
			
		}
		
		while(output.size() > 0) {
			visitor.visit(output.pop());
		}

	}
	
	public void visitLevelorder(Visitor<TKey, TValue> visitor) {
		
		if(this.root == null) {
			return;
		}
		
		Queue<Node<TKey, TValue>> queue = new java.util.LinkedList<Node<TKey, TValue>>();
		queue.add(this.root);
		
		while(queue.size() > 0) {
			Node<TKey, TValue> dequeued = queue.remove();
			visitor.visit(dequeued);
			if(dequeued.getLeft() != null) {
				queue.add(dequeued.getLeft());
			}
			if(dequeued.getRight() != null) {
				queue.add(dequeued.getRight());
			}
		}

	}
	
	public boolean isMirrorTree() {
		if(this.root == null) {
			return true;
		}
		return this.isMirror(this.root.getLeft(), this.root.getRight());
	}
	
	private boolean isMirror(Node<TKey, TValue> left, Node<TKey, TValue> right) {
		
		if(left == null || right == null) {
			return left == null && right == null;
		}
		
		if(left.getKey() != right.getKey()) {
			return false;
		}
		
		if(!this.isMirror(left.getLeft(), right.getRight())) {
			return false;
		}
		
		if(!this.isMirror(left.getRight(), right.getLeft())) {
			return false;
		}
		
		return true;
		
	}
	
	public boolean isValidBinarySearchTree() {
		
		if(this.root == null) {
			return true;
		}
		
		Stack<Node<TKey, TValue>> stack = new Stack<Node<TKey, TValue>>();
		stack.push(this.root);
		
		while(stack.size() > 0) {
			
			Node<TKey, TValue> popped = stack.pop();
			
			if(!this.isValidBstNode(popped)) {
				return false;
			}
			
			if(popped.getLeft() != null) {
				stack.push(popped.getLeft());
			}
			
			if(popped.getRight() != null) {
				stack.push(popped.getRight());
			}
			
		}
		
		return true;
		
	}
	
	private boolean isValidBstNode(Node<TKey, TValue> node) {
		
		if(node.getLeft() != null && node.getLeft().getKey().compareTo(node.getKey()) > 0) {
			return false;
		}
		
		if(node.getRight() != null && node.getRight().getKey().compareTo(node.getKey()) < 0) {
			return false;
		}
		
		return true;
		
	}

	public void add(TKey key, TValue value) {
		
		Node<TKey, TValue> newNode = new Node<TKey, TValue>(key, value);
		
		this.addNode(newNode);
		
	}
	
	public void addNode(Node<TKey, TValue> newNode) {

		if(this.root == null) {
			this.root = newNode;
			return;
		}

		Node<TKey, TValue> current = this.root;
		
		while(current != null) {
			if(newNode.getKey().compareTo(current.getKey()) <= 0) {
				if(current.getLeft() == null) {
					current.setLeft(newNode);
					return;
				} else {
					current = current.getLeft();
				}
			} else {
				if(current.getRight() == null) {
					current.setRight(newNode);
					return;
				} else {
					current = current.getRight();
				}
			}
		}
		
	}
	
	public TValue find(TKey key) {
		
		if(this.root == null) {
			return null;
		}
		
		Node<TKey, TValue> parentNode = this.findParentNode(key);
		if(parentNode == null) {
			return null;
		}
		
		if(parentNode.getLeft() != null && parentNode.getLeft().getKey().equals(key)) {
			return parentNode.getLeft().getValue();
		}
		
		return parentNode.getRight().getValue();

	}
	
	public boolean delete(TKey key) {

		if(this.root == null) {
			return false;
		}
		
		if(this.root.getKey().equals(key)) {
			
			Node<TKey, TValue> orphan = this.root.getLeft();
			this.root = this.root.getRight();
			
			if(orphan != null) {
				this.addNode(orphan);
			}
			
		}
		
		Node<TKey, TValue> parentNode = findParentNode(key);
		if(parentNode == null) {
			return false;
		}

		if(parentNode.getLeft() != null && parentNode.getLeft().getKey().equals(key)) {
			
			Node<TKey, TValue> toDelete = parentNode.getLeft();
			Node<TKey, TValue> orphan = toDelete.getLeft();
			parentNode.setLeft(toDelete.getRight());
			
			if(orphan != null) {
				this.addNode(orphan);
			}

		} else {
			
			Node<TKey, TValue> toDelete = parentNode.getRight();
			Node<TKey, TValue> orphan = toDelete.getLeft();
			parentNode.setRight(toDelete.getRight());
			
			if(orphan != null) {
				this.addNode(orphan);
			}
			
		}

		return true;
	}
	
	private Node<TKey, TValue> findParentNode(TKey key) {

		Node<TKey, TValue> parentNode = null;
		Node<TKey, TValue> currentNode = this.root;
		
		while(currentNode != null) {

			if(key.compareTo(currentNode.getKey()) < 0) {
				parentNode = currentNode;
				currentNode = currentNode.getLeft();
			} else if(key.compareTo(currentNode.getKey()) > 0) {
				parentNode = currentNode;
				currentNode = currentNode.getRight();
			} else {
				break;
			}
			
		}
		
		if(currentNode == null) {
			return null;
		}
		
		return parentNode;
		
	}


}
