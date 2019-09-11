export const activatedCards = (state = [], action) => {
  switch (action.type) {
    case "ACTIVATE_CARD":
      return [...state, action.card];
    default:
      return state;
  }
};
