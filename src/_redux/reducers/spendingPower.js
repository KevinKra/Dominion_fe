export const spendingPower = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TREASURE":
      return state + action.increase;
    case "SPEND_TREASURE":
      return state - action.decrease;
    case "APPLY_ACTION_VALUES":
      return state + action.spendingPower;
    default:
      return state;
  }
};
