import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./PlayerDeck.scss";
import CardBack from "../CardBack/CardBack";

export class PlayerDeck extends Component {
  draw(drawCount = 1) {
    // this method doesn't need to be this complex, but the draw method for the action cards will be so...
    // ... this method will be used as a reference
    const { deck, hand, discard, updatePlayerCards } = this.props;
    const newDraw = deck.splice(0, drawCount);
    const newHand = [...hand, newDraw];
    updatePlayerCards(deck, newHand, discard);
    console.log("drawing card from draw pile");
  }

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

export default connect(mapStateToProps)(PlayerDeck);
