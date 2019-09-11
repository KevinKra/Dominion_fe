export const actionsProvided = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE_ACTIONS":
      return state + action.increase;
    case "USE_ACTION":
      return state - 1;
    default:
      return state;
  }
};
