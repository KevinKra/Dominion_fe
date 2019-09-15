export const justBought = (state = "", action) => {
  switch (action.type) {
    case "BOUGHT_CARD":
      return action.cardName;
    case "CLEAR_CARD":
      return "";
    default:
      return state;
  }
};
