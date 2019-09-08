export const playerTurn = (state = {}, action) => {
  switch (action.type) {
    case "START_TURN":
      return {
        isActive: true,
        phase: "Action"
      };
    case "ENTER_BUY_PHASE":
      return {
        isActive: true,
        phase: "Buy"
      };
    case "ENTER_CLEANUP_PHASE":
      return {
        isActive: true,
        phase: "Cleanup"
      };
    case "END_TURN":
      return {
        isActive: false,
        phase: "Standby"
      };
    default:
      return state;
  }
};
