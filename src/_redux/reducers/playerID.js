export const playerID = (state = null, action) => {
  switch (action.type) {
    case "INITIATE_PLAYER":
      return action.playerID;
    default:
      return state;
  }
};
