package com.benlakey.java_learning.datastructures;

public class LinkedList<T> {

	private class Node {
		
		public T value;
		public Node next;
		
		public Node(T value, Node next) {
			this.value = value;
			this.next = next;
		}
		
	}
	
	private Node head;
	private int count;
	
	public int getCount() {
		return this.count;
	}

	public void append(T value) {
		
		if(this.head == null) {
			this.head = new Node(value, null);
		} else {
			Node current = this.head;
			while(current.next != null) {
				current = current.next;
			}
			current.next = new Node(value, null);
		}
		
		this.count++;
		
	}
	
	public void prepend(T newValue) {
		
		if(this.head == null) {
			this.head = new Node(newValue, null);
		} else {
			Node newHead = new Node(newValue, this.head);
			this.head = newHead;
		}
		
		count++;
		
	}
	
	public void insert(T newValue, int index) {
		
		if(!this.indexIsInRange(index)) {
			throw new IndexOutOfBoundsException();
		}
		
		if(index == 0) {
			this.prepend(newValue);
			return;
		}
		
		Node previous = null;
		Node current = this.head;
		
		for(int i = 0; i < index; i++) {
			previous = current;
			current = current.next;
		}

		Node newNode = new Node(newValue, current);
		previous.next = newNode;
		
		this.count++;
		
	}
	
	private boolean indexIsInRange(int index) {
		
		int maxIndex = this.count - 1;

		if(index < 0 || index > maxIndex) {
			return false;
		}
		
		return true;
	}
	
	public void remove(T value) {
		
		if(this.head == null) {
			return;
		}
		
		if(this.head.value == value) {
			this.head = this.head.next;
			this.count--;
			return;
		}
		
		Node previous = null;
		Node current = this.head;
		
		while(current != null) {
			if(current.value.equals(value)) {
				previous.next = current.next;
				this.count--;
			}
			previous = current;
			current = current.next;
		}
		
	}
	
	public void reverse() {
		
		if(this.head == null || this.head.next == null) {
			return;
		}
		
		Node previous = null;
		Node current = this.head;
		Node next = this.head.next;
		
		while(next != null) {
			
			current.next = previous;
			
			previous = current;
			current = next;
			next = current.next;
			
		}
		
		current.next = previous;
		this.head = current;
		
	}

	public String toString() {
		
		String output = "";
		
		Node current = this.head;
		while(current != null) {
			output += current.value;
			if(current.next != null) {
				output += ",";
			}
			current = current.next;
		}
		
		return output;
	}
	
}
