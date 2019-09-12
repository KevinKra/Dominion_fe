export const bought = (state = [], action) => {
  switch (action.type) {
    case "BUY_CARD":
      return [...state, action.id];
    case "END_TURN":
      return [];
    default:
      return state;
  }
};
