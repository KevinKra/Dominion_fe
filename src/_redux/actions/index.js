export const updateTableCards = cards => {
  return {
    type: 'UPDATE_TABLE_CARDS',
    cards
  };
};

export const updatePlayerCards = (playerDeck, playerHand, discardPile) => {
  return {
    type: 'UPDATE_PLAYER_CARDS',
    playerDeck,
    playerHand,
    discardPile
  };
};

export const beginTurn = () => {
  return {
    type: 'START_TURN'
  };
};

export const endTurn = () => {
  return {
    type: 'END_TURN'
  };
};

export const cycleToPhase = phase => {
  return {
    type: 'CYCLE_PHASE',
    phase
  };
};

export const initiatePlayer = (gameId, playerId, playerName) => {
  return {
    type: 'INITIATE_PLAYER',
    gameId,
    playerId,
    playerName
  };
};

export const addTreasure = increase => {
  return {
    type: 'ADD_TREASURE',
    increase
  };
};

export const spendTreasure = decrease => {
  return {
    type: 'SPEND_TREASURE',
    decrease
  };
};

export const activateCard = card => {
  return {
    type: 'ACTIVATE_CARD',
    card
  };
};

export const applyActionValues = (
  spendingPower,
  buyingPower,
  actionsProvided
) => {
  return {
    type: 'APPLY_ACTION_VALUES',
    spendingPower,
    buyingPower,
    actionsProvided
  };
};

export const bought = id => {
  return {
    type: 'BUY_CARD',
    id
  };
};

export const useBuy = () => {
  return {
    type: 'USE_BUY'
  };
};

export const discardCards = cards => {
  return {
    type: 'DISCARD_CARDS',
    cards
  };
};

export const boughtCard = cardName => {
  return {
    type: 'BOUGHT_CARD',
    cardName
  };
};

export const updateDiscardImage = imgurl => {
  return {
    type: 'UPDATE_DISCARD_IMAGE',
    imgurl
  };
};

export const purgeDiscardPile = () => {
  return {
    type: 'PURGE_DISCARD_PILE'
  };
};
