import { connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../_redux/actions";
import ActivatedCards from "../ActivatedCards/ActivatedCards";
import * as SVGLoaders from "svg-loaders-react";
import PlayerDeck from "../PlayerDeck/PlayerDeck";
import PlayerHand from "../PlayerHand/PlayerHand";
import DiscardPile from "../DiscardPile/DiscardPile";
import { updateGameState, updatePlayerState } from "../../_utils/apiCalls";
import "./PlayerSection.scss";

const url = "https://accession-game-server.herokuapp.com";

export class PlayerSection extends Component {
  state = {
    dataUpdated: false
  };

  componentDidMount = () => {
    this.startTimer();
    this.requestPlayerTurn();
  };

  startTimer = () => {
    this.turnInterval = setInterval(() => this.requestPlayerTurn(), 15000);
  };

  componentWillUnmount = () => {
    clearInterval(this.turnInterval);
  };

  requestPlayerTurn = async () => {
    const gameState = await updateGameState(this.props.gameID);
    if (gameState.tableDeck.length === 0) {
      return console.log("Waiting for game to start.");
    }
    if (gameState.activePlayerId === this.props.playerID) {
      //active player
      console.log("It's your turn, turnInterval turned off. Please complete your turn.");
      clearInterval(this.turnInterval);
      this.turnInterval = undefined;
      this.props.startTurn();
      this.props.applyActionValues(0, 1, 1);
      this.updatePlayerData();
    } else {
      //waiting player
      console.log("Not your turn, continuing the interval check the turn");
      this.updatePlayerData();
    }
    console.log(gameState);
    this.props.updateTableCards(gameState.tableDeck);
  };

  draw = deck => {
    const newHand = deck.splice(0, 5);
    return { newHand, deck };
  };

  shuffle = deck => {
    for (let i = deck.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }
    return deck;
  };

  updatePlayerData = async () => {
    if (!this.state.dataUpdated && !this.props.playerHand.length) {
      const playerData = await updatePlayerState(this.props.gameID, this.props.playerID);
      const drawnCards = this.draw(playerData.deck);
      this.props.updatePlayerCards(
        drawnCards.deck,
        drawnCards.newHand,
        playerData.discard || null
      );
    }
    this.setState({ dataUpdated: true });
  };

  endTurnPOST = async (boughtCardIds, discardPile, playerDeckIds) => {
    const path = "/api/v1/endturn";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameId: this.props.gameID,
        playerId: this.props.playerID,
        deck: playerDeckIds,
        bought: boughtCardIds,
        discard: discardPile
      })
    };
    try {
      const response = await fetch(url + path, options);
      if (!response.ok) {
        throw new Error("Failed to end turn.");
      }
      const reply = await response.json();
      this.setState({ dataUpdated: false });
      this.startTimer();
      return reply;
    } catch (error) {
      throw Error(error.message);
    }
  };

  cleanUp = () => {
    const boughtCardIds = this.props.bought;
    const handCardIds = this.props.playerHand.map(card => card.id);
    const activatedCardsIds = this.props.activatedCards.map(
      activatedCard => activatedCard.id
    );
    const discardedIds = this.props.discardPile.map(card => card.id);

    if (!this.props.playerDeck.length) {
      const newDeck = this.shuffle([
        ...boughtCardIds,
        ...handCardIds,
        ...activatedCardsIds,
        ...discardedIds
      ]);
      this.props.endTurn();
      this.endTurnPOST(boughtCardIds, [], newDeck);
    } else {
      const playerDeckIds = this.props.playerDeck.map(deckCard => {
        return deckCard.id;
      });
      const discardPile = [...boughtCardIds, ...handCardIds, ...activatedCardsIds];
      this.props.discardCards(discardPile);
      this.props.endTurn();
      this.endTurnPOST(boughtCardIds, discardPile, playerDeckIds);
    }
  };

  render() {
    const gameIdNotifier =
      this.props.tableCards.length === 0 ? (
        <section className='loading-page'>
          <div className='loading-container'>
            <h2>Waiting for Opponent</h2>
            <p className='game-id'>GAME ID: {this.props.gameID}</p>
            <div className='loading-icon-container'>
              <SVGLoaders.BallTriangle className='loading-icon' />
            </div>
          </div>
          <div className='background-image' />
        </section>
      ) : (
        <section className='loaded-content'>
          <ActivatedCards />
          <PlayerDeck />
          <PlayerHand />
          <DiscardPile />
          <button className='end-turn' onClick={this.cleanUp}>
            End Turn
          </button>
        </section>
      );

    return <section className='PlayerSection'>{gameIdNotifier}</section>;
  }
}

export const mapStateToProps = state => ({
  tableCards: state.tableCards,
  playerTurn: state.playerTurn,
  playerDeck: state.playerDeck,
  playerHand: state.playerHand,
  discardPile: state.discardPile,
  gameID: state.gameID,
  playerID: state.playerID,
  bought: state.bought,
  activatedCards: state.activatedCards
});

export const mapDispatchToProps = dispatch => ({
  startTurn: () => dispatch(actions.startTurn()),
  cycleToPhase: phase => dispatch(actions.cycleToPhase(phase)),
  endTurn: () => dispatch(actions.endTurn()),
  updatePlayerCards: (deck, hand, discardPile) =>
    dispatch(actions.updatePlayerCards(deck, hand, discardPile)),
  updateTableCards: cards => dispatch(actions.updateTableCards(cards)),
  applyActionValues: (spendingPower, buyingPower, actionsProvided) =>
    dispatch(actions.applyActionValues(spendingPower, buyingPower, actionsProvided)),
  discardCards: cards => dispatch(actions.discardCards(cards))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSection);
