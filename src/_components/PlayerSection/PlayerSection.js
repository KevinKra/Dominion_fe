import { connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../_redux/actions";
import ActivatedCards from "../ActivatedCards/ActivatedCards";
import PlayerDeck from "../PlayerDeck/PlayerDeck";
import PlayerHand from "../PlayerHand/PlayerHand";
import DiscardPile from "../DiscardPile/DiscardPile";
import { updateGameState, updatePlayerState } from "../../_utils/apiCalls";
import "./PlayerSection.scss";

export class PlayerSection extends Component {
  state = {
    dataUpdated: false
  };

  componentDidMount = () => {
    this.turnInterval = setInterval(() => this.requestPlayerTurn(), 15000);
    this.requestPlayerTurn();
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

  updatePlayerData = async () => {
    if (!this.state.dataUpdated) {
      const playerData = await updatePlayerState(this.props.gameID, this.props.playerID);
      console.log(playerData);
      const drawnCards = this.draw(playerData.deck);
      this.props.updatePlayerCards(
        drawnCards.deck,
        drawnCards.newHand,
        playerData.discardPile || null
      );
    }
    this.setState({ dataUpdated: true });
  };

  cleanUp = () => {
    const boughtCardIds = this.props.bought;
    const activatedCardsIds = this.props.activatedCards.map(activatedCard => {
      return activatedCard.id;
    });
    const playerDeckIds = this.props.playerDeck.map(deckCard => {
      return deckCard.id;
    });
    const discardPile = [...boughtCardIds, ...activatedCardsIds];
    this.props.discardCards(discardPile);
    this.props.endTurn();
    this.endTurn(boughtCardIds, discardPile, playerDeckIds);
  };

  endTurn = async (boughtCardIds, discardPile, playerDeckIds) => {
    const url = "http://localhost:3000";
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
      return reply;
    } catch (error) {
      throw Error(error.message);
    }
  };

  //!!! need to reset dataUpdated to false at the start of every turn so players will fetch
  //their data once regardless whether they are active or waiting
  startNewTurn() {
    //this function needs to reset dataUpdatedToFalse
    //needs to be called at the start of requestPlayerTurn to reset local state
    //then both players are able to fetch their respective cards and toggle that state to off.
  }

  render() {
    return (
      <section className='PlayerSection'>
        <ActivatedCards />
        <PlayerDeck />
        <PlayerHand />
        <DiscardPile />
        <button className='end-turn' onClick={this.cleanUp}>
          End Turn
        </button>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
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
  startTurn: () => dispatch(actions.beginTurn()),
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
