export const playerDeck = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_CARDS":
      return action.playerDeck;
    default:
      return state;
  }
};
