export const discardPile = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_DISCARD_PILE":
      return action.discardPile;
    default:
      return state;
  }
};
