export const spendingPower = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TREASURE":
      return state + action.increase;
    case "SPEND_TREASURE":
      return state - action.decrease;
    default:
      return state;
  }
};
