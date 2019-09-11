export const playerName = (state = "", action) => {
  switch (action.type) {
    case "INITIATE_PLAYER":
      return action.playerName;
    default:
      return state;
  }
};
