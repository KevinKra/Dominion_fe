import React, { Component } from "react";
import { Connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./PlayerDeck.scss";
import CardBack from "../CardBack/CardBack";

export class PlayerDeck extends Component {

  render() {
  return (
      <section
        className="PlayerDeck"
        onClick={drawCount => this.draw(drawCount)}
      >
      <CardBack />
    </section>
  );
}
}

const mapStateToProps = state => ({
  deck: state.playerDeck,
  hand: state.playerHand,
  discard: state.discardPile
});

const mapDispatchToProps = dispatch => ({
  updatePlayerCards: (deck, hand, discard) =>
    dispatch(actions.updatePlayerCards(deck, hand, discard))
});

export default Connect(mapStateToProps)(PlayerDeck);
