export const playerHand = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_HAND":
      return action.playerHand;
    default:
      return state;
  }
};
