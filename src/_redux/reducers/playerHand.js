export const playerHand = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_CARDS":
      return action.playerHand;
    default:
      return state;
  }
};
