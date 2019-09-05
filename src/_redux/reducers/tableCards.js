export const tableCards = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_TABLE_CARDS":
      return action.cards;
    default:
      return state;
  }
};
