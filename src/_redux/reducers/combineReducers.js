import { combineReducers } from 'redux';
import { tableCards } from './tableCards';
import { playerDeck } from './playerDeck';
import { playerHand } from './playerHand';
import { discardPile } from './discardPile';
import { playerTurn } from './playerTurn';
import { gameId } from './gameID';
import { playerId } from './playerID';
import { playerName } from './playerName';
import { spendingPower } from './spendingPower';
import { buyingPower } from './buyingPower';
import { activatedCards } from './activatedCards';
import { actionsProvided } from './actionsProvided';
import { bought } from './bought';
import { justBought } from './justBought';
import { discardImage } from './discardImage';

export const rootReducer = combineReducers({
  tableCards,
  playerTurn,
  playerDeck,
  playerHand,
  discardPile,
  gameId,
  playerId,
  playerName,
  spendingPower,
  buyingPower,
  activatedCards,
  actionsProvided,
  bought,
  justBought,
  discardImage
});
