import { getEnumValuesAndKeys } from "../utils";
import { DoublyLinkedList, DoublyLinkedListNode } from "../core/doubly-linked-list";

const NORMAL_CARD_COUNT = 12;
const SKIPBO_CARD_COUNT = 18;

export enum Card {
  SkipBo = -1,
  Empty, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve,
}

// this will create an unsorted, factory fresh deck of Skip Bo
export function generateSkipBoCards() {
  // split enum so we can generate our card values dynamically
  const {values} = getEnumValuesAndKeys(Card);
  const deck:Card[] = [];

  for(let cardValue of values) {
    if(cardValue === 0) {
      continue;
    }

    const cards = Array.from(Array(NORMAL_CARD_COUNT), () => parseInt(cardValue) as Card);
    deck.push(...cards);
  }
  // add our skipbo cards (there are more than the default faces in the deck)
  const cards = Array.from(Array(SKIPBO_CARD_COUNT), () => Card.SkipBo);
  deck.push(...cards);

  return deck;
}
