export const discardPile = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_CARDS":
      return action.discardPile;
    default:
      return state;
  }
};
