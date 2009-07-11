package com.benlakey.java_learning;

public class Card {

	private CardSuit suit;
	private int value;

	public Card(CardSuit suit, int value) {
		
		if(value < 1 || value > 13) {
			throw new IllegalArgumentException("Value " + value + " is illegal. Card value must be between 1 and 13.");
		}
		
		this.suit = suit;
		this.value = value;
	}
	
	public int getValue() {
		return value;
	}
	
	public void setValue(int value) {
		this.value = value;
	}
	
	public CardSuit getSuit() {
		return suit;
	}
	
	public void setSuit(CardSuit suit) {
		this.suit = suit;
	}

	public String toString() {
		
		String valueName = "" + this.value;
		if(this.value == 11) {
			valueName = "Jack";
		} else if(this.value == 12) {
			valueName = "Queen";
		} else if(this.value == 13) {
			valueName = "King";
		}
		
		return valueName + " of "  + this.suit.name();
		
	}
}
