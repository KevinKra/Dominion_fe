export const bought = (state = [], action) => {
  switch (action.type) {
    case "BUY_CARD":
      return [...state, action.id];
    case "CLEAN_UP":
      return [];
    default:
      return state;
  }
};
