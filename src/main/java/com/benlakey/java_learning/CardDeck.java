package com.benlakey.java_learning;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

public class CardDeck implements Iterable<Card> {

	private static final int FULL_DECK_COUNT = 52;
	private static final int VALUES_PER_SUIT = 13;
	
	private List<Card> cards;
	
	public CardDeck() {
		
		this.cards = new ArrayList<Card>();
		
		CardSuit[] suits = CardSuit.values();
		int currentSuitIndex = 0;
		
		for(int index = 0; index < FULL_DECK_COUNT; index++) {
			
			if(index != 0 && index % VALUES_PER_SUIT == 0) {
				currentSuitIndex++;
			}
			
			CardSuit suit = suits[currentSuitIndex];
			int cardValue = (index % VALUES_PER_SUIT) + 1;
			
			this.cards.add(new Card(suit, cardValue));
		}

	}
	
	public synchronized int getCount() {
		return this.cards.size();
	}
	
	public synchronized void shuffle() {
		
		Random random = new Random();
		
		int numCards = this.getCount();
		
		for(int i = 0; i < numCards; i++) {
			int index1 = random.nextInt(FULL_DECK_COUNT);
			int index2 = numCards - 1 - index1;
			this.swap(index1, index2);
		}
		
	}
	
	public synchronized Card dealCard() {
		
		int numCards = this.getCount();
		
		Random random = new Random();
		int indexToRemove = random.nextInt(numCards);
		
		return this.cards.remove(indexToRemove);
		
	}

	private void swap(int index1, int index2) {
		
		Card temp = this.cards.get(index1);
		this.cards.set(index1, this.cards.get(index2));
		this.cards.set(index2, temp);
		
	}

	public synchronized String toString() {
		
		StringBuffer buffer = new StringBuffer();
		
		int numCards = this.getCount();
		
		for(int i = 0; i < numCards; i++) {
			buffer.append(this.cards.get(i).toString() + '\n');
		}
		
		return buffer.toString();
	}

	public Iterator<Card> iterator() {
		return this.cards.iterator();
	}

}
