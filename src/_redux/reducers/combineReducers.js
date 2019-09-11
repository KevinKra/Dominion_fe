import { combineReducers } from "redux";
import { tableCards } from "./tableCards";
import { playerDeck } from "./playerDeck";
import { playerHand } from "./playerHand";
import { discardPile } from "./discardPile";
import { playerTurn } from "./playerTurn";
import { gameID } from "./gameID";

export const rootReducer = combineReducers({
  tableCards,
  playerTurn,
  playerDeck,
  playerHand,
  discardPile,
  gameID
});
