export const playerTurn = (
  state = { isActive: false, phase: "Standby" },
  action
) => {
  switch (action.type) {
    case "START_TURN":
      return {
        isActive: true,
        phase: "Action"
      };
    case "CYCLE_PHASE":
      return {
        isActive: true,
        phase: action.phase
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
