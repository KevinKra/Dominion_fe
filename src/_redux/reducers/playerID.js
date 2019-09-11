export const playerID = (state = null, action) => {
  switch (action.type) {
    case "LOAD_PLAYER_ID":
      return action.playerID;
    default:
      return state;
  }
};
