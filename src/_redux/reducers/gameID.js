export const gameId = (state = null, action) => {
  switch (action.type) {
    case "INITIATE_PLAYER":
      return action.gameId;
    default:
      return state;
  }
};
