import { combineReducers } from "redux";
import { tableCards } from "./tableCards";
import { playerDeck } from "./playerDeck";
import { playerHand } from "./playerHand";
import { discardPile } from "./discardPile";

export const rootReducer = combineReducers({
  tableCards,
  playerDeck,
  playerHand,
  discardPile
});
