export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_CARDS":
      return action.cards;
    default:
      return state;
  }
};
