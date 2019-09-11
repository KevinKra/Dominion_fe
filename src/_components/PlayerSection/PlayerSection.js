import { connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../_redux/actions";
import ActivatedCards from "../ActivatedCards/ActivatedCards";
import PlayerDeck from "../PlayerDeck/PlayerDeck";
import PlayerHand from "../PlayerHand/PlayerHand";
import DiscardPile from "../DiscardPile/DiscardPile";
import { updateGameState } from "../../_utils/apiCalls";
import "./PlayerSection.scss";

export class PlayerSection extends Component {
  componentDidMount = () => {
    this.turnInterval = setInterval(() => this.requestPlayerTurn(), 15000);
    this.requestPlayerTurn();
  };

  componentWillUnmount = () => {
    clearInterval(this.turnInterval);
  };

  requestPlayerTurn = () => {
    // fetch game state
    console.log("fetching game state...");
  };

  render() {
    return (
      <section className="PlayerSection">
        <ActivatedCards />
        <PlayerDeck />
        <PlayerHand />
        <DiscardPile />
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  playerTurn: state.playerTurn,
  playerDeck: state.playerDeck,
  playerHand: state.playerHand,
  discardPile: state.discardPile
});

export const mapDispatchToProps = dispatch => ({
  startTurn: () => dispatch(actions.beginTurn()),
  cycleToPhase: phase => dispatch(actions.cycleToPhase(phase)),
  endTurn: () => dispatch(actions.endTurn()),
  updatePlayerCards: (deck, hand, discardPile) =>
    dispatch(actions.updatePlayerCards(deck, hand, discardPile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSection);
