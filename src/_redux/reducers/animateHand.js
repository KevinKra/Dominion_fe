export const animateHand = (state = false, action) => {
  switch (action.type) {
    case "TRIGGER_HAND_ANIMATION":
      return true;
    case "END_TURN":
      return false;
    default:
      return state;
  }
};
