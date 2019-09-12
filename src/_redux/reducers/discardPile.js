export const discardPile = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_CARDS":
      return action.discardPile;
    case "DISCARD_CARDS":
      return action.cards;
    default:
      return state;
  }
};
