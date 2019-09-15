export const round = (state = 0, action) => {
  switch (action.type) {
    case "START_TURN":
      return state + 1;
    case "CLEAR_GAME":
      return 0;
    default:
      return state;
  }
};
