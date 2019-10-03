export const playerId = (state = null, action) => {
  switch (action.type) {
    case "INITIATE_PLAYER":
      return action.playerId;
    default:
      return state;
  }
};
