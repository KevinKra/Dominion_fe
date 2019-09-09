export const updateTableCards = cards => {
  return {
    type: "UPDATE_TABLE_CARDS",
    cards
  };
};

export const updatePlayerHand = playerHand => {
  return {

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
