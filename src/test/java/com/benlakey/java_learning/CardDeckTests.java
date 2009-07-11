package com.benlakey.java_learning;

import static org.junit.Assert.*;
import java.util.ArrayList;
import java.util.List;
import org.junit.Test;
import com.benlakey.java_learning.Card;
import com.benlakey.java_learning.CardDeck;

public class CardDeckTests {

	@Test
	public void deckIsCreatedCorrectly() {
		
		CardDeck deck = new CardDeck();

		assertTrue(deckHasAllCards(deck));

	}
	
	@Test
	public void deckCanBeShuffled() {
		
		CardDeck deck = new CardDeck();
		
		deck.shuffle();
		
		assertTrue(deckHasNoDuplicates(deck));

		int countOutOfOrder = 0;
		int lastCardValue = 1;
		
		for(Card card : deck) {
			if(lastCardValue - 1 != card.getValue()) {
				countOutOfOrder++;
			}
			lastCardValue = card.getValue();
		}

		assertTrue(countOutOfOrder > 1);
	}
	
	@Test
	public void deckCanHaveCardsDealt() {
		
		CardDeck deck = new CardDeck();
		
		List<Card> seen = new ArrayList<Card>();
		boolean deckHasCards = true;
		
		while(deckHasCards) {
			
			int numCards = deck.getCount();
			Card dealtCard = deck.dealCard();

			assertFalse(seen.contains(dealtCard));
			
			assertEquals(numCards - 1, deck.getCount());
			
			seen.add(dealtCard);
			deckHasCards = deck.getCount() > 0;
		}

	}
	
	private static boolean deckHasAllCards(CardDeck deck) {

		if(52 != deck.getCount()) {
			return false;
		}
		
		if(!deckHasNoDuplicates(deck)) {
			return false;
		}
		
		return true;
		
	}
	
	private static boolean deckHasNoDuplicates(CardDeck deck) {
		
		List<Card> seen = new ArrayList<Card>();
		
		for(Card card : deck) {
			
			int cardValue = card.getValue();
			
			if(cardValue < 1 || cardValue > 13) { 
				return false;
			}
			
			if(seen.contains(card)) {
				return false;
			}
			
			seen.add(card);
			
		}
		
		return true;

	}
	
}
