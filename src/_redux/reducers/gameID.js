export const gameID = (state = null, action) => {
  switch (action.type) {
    case "LOAD_GAME_ID":
      return action.gameID;
    default:
      return state;
  }
};
