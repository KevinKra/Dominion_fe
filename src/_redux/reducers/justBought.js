export const justBought = (state = "", action) => {
  switch (action.type) {
    case "BOUGHT_CARD":
      return action.cardName;
    default:
      return state;
  }
};
