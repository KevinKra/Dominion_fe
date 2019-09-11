export const gameID = (state = null, action) => {
  switch (action.type) {
    case "INITIATE_PLAYER":
      return action.gameID;
    default:
      return state;
  }
};
