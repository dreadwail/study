package com.benlakey.java_learning.datastructures;

import static org.junit.Assert.*;

import org.junit.Test;

import com.benlakey.java_learning.datastructures.LinkedList;

public class LinkedListTests {

	@Test
	public void emptyListIsOutputAsEmptyString() {

		LinkedList<String> list = new LinkedList<String>();
		
		assertEquals("", list.toString());

	}
	
	@Test
	public void itemsCanBeAppendedToEmptyList() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		
		assertEquals("foo", list.toString());
		
	}
	
	@Test
	public void emptyListCountIsZero() {
		
		LinkedList<String> list = new LinkedList<String>();

		assertEquals(0, list.getCount());
		
	}
	
	@Test
	public void appendingItemToEmptyListIncreasesCount() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		
		assertEquals(1, list.getCount());
	}
	
	@Test
	public void itemsCanBePrependedToEmptyList() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.prepend("foo");
		
		assertEquals("foo", list.toString());
		
	}
	
	@Test
	public void prependingItemToEmptyListIncreasesCount() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.prepend("foo");
		
		assertEquals(1, list.getCount());
		
	}
	
	@Test
	public void itemsCanBeAppendedToNonEmptyList() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.append("bar");
		
		assertEquals("foo,bar", list.toString());
		
	}
	
	@Test
	public void appendingItemsToNonEmptyListIncreasesCount() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.append("bar");
		
		assertEquals(2, list.getCount());
		
	}
	
	@Test
	public void itemsCanBePrependedToNonEmptyList() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.prepend("foo");
		list.prepend("bar");
		
		assertEquals("bar,foo", list.toString());
		
	}
	
	@Test
	public void prependingItemsToNonEmptyListIncreasesCount() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.prepend("foo");
		list.prepend("bar");
		
		assertEquals(2, list.getCount());
		
	}

	@Test
	public void itemsCanBeInsertedToNonEmptyListAtStart() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.insert("bar", 0);
		
		assertEquals("bar,foo", list.toString());

	}
	
	@Test
	public void itemsCanBeInsertedToNonEmptyListInMiddle() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.append("bar");
		list.insert("baz", 1);
		
		assertEquals("foo,baz,bar", list.toString());

	}
	
	@Test
	public void insertingItemsToNonEmptyListIncreasesCount() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.insert("bar", 0);
		
		assertEquals(2, list.getCount());

	}
	
	@Test(expected=IndexOutOfBoundsException.class)
	public void itemsCannotBeInsertedAtPositionOutsideBounds() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.insert("bar", 99);

	}
	
	@Test
	public void itemsCanBeRemovedFromList() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.append("bar");
		list.append("baz");
		list.append("bar");
		
		list.remove("bar");
		
		assertEquals("foo,baz", list.toString());
		
	}
	
	@Test 
	public void canReverseEmptyList() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.reverse();
		
		assertEquals("", list.toString());
		
	}
	
	@Test 
	public void canReverseNonEmptyListWithSingleItem() {
		
		LinkedList<String> list = new LinkedList<String>();
		
		list.append("foo");
		list.reverse();
		
		assertEquals("foo", list.toString());
		
	}
	
	@Test 
	public void canReverseNonEmptyListWithMultipleItems() {
		
		LinkedList<String> list = new LinkedList<String>();

		list.append("foo");
		list.append("bar");
		list.append("baz");
		
		list.reverse();
		
		assertEquals("baz,bar,foo", list.toString());
		
	}
}
