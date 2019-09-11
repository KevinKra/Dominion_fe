export const playerHand = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_CARDS":
      return action.playerHand;
    case "ACTIVATE_CARD":
      return state.filter(card => card !== action.card);
    default:
      return state;
  }
};
