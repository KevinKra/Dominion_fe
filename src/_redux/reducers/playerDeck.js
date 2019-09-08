export const playerDeck = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_DECK":
      return action.playerDeck;
    default:
      return state;
  }
};
