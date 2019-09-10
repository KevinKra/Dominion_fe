import { Connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../_redux/actions";
import ActivatedCards from "../ActivatedCards/ActivatedCards";
import PlayerDeck from "../PlayerDeck/PlayerDeck";
import PlayerHand from "../PlayerHand/PlayerHand";

import "./PlayerSection.scss";
import DiscardPile from "../DiscardPile/DiscardPile";

export class PlayerSection extends Component {
  componentDidMount = () => {
    //fetch request for player state;
    // updatePlayerCards(deck, hand, discardPile)
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

export default Connect(mapStateToProps, mapDispatchToProps)(PlayerSection);
