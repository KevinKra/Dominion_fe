export const updateTableCards = cards => {
  return {
    type: "UPDATE_TABLE_CARDS",
    cards
  };
};

export const updatePlayerCards = (playerDeck, playerHand, discardPile) => {
  return {
    type: "UPDATE_PLAYER_CARDS",
    playerDeck,
    playerHand,
    discardPile
  };
};

export const beginTurn = () => {
  return {
    type: "START_TURN"
  };
};

export const endTurn = () => {
  return {
    type: "END_TURN"
  };
};

export const cycleToPhase = phase => {
  return {
    type: "CYCLE_PHASE",
    phase
  };
};

export const initiatePlayer = (gameID, playerID, playerName) => {
  return {
    type: "INITIATE_PLAYER",
    gameID,
    playerID,
    playerName
  };
};

export const addTreasure = increase => {
  return {
    type: "ADD_TREASURE",
    increase
  };
};

export const spendTreasure = decrease => {
  return {
    type: "SPEND_TREASURE",
    decrease
  };
};

export const activateCard = card => {
  return {
    type: "ACTIVATE_CARD",
    card
  };
};

export const applyActionValues = (
  spendingPower,
  buyingPower,
  actionsProvided
) => {
  return {
    type: "APPLY_ACTION_VALUES",
    spendingPower,
    buyingPower,
    actionsProvided
  };
};
