export const updateTableCards = cards => {
  return {
    type: "UPDATE_TABLE_CARDS",
    cards
  };
};

export const updatePlayerHand = playerHand => {
  return {
    type: "UPDATE_PLAYER_HAND",
    playerHand
  };
};

export const updatePlayerDeck = playerDeck => {
  return {
    type: "UPDATE_PLAYER_DECK",
    playerDeck
  };
};

export const updateDiscardPile = discardPile => {
  return {
    type: "UPDATE_DISCARD_PILE",
    discardPile
  };
};
