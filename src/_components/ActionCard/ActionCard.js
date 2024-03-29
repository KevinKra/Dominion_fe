import React, { Component } from 'react';
// import "./ActionCard.scss";
import * as actions from '../../_redux/actions';
import Card from '../Card/Card';
import { connect } from 'react-redux';

export class ActionCard extends Component {
  draw = drawCount => {
    const {
      updatePlayerCards,
      playerDeck,
      playerHand,
      discardPile
    } = this.props;
    const drawnCards = playerDeck.splice(0, drawCount);
    const newHand = [...playerHand, ...drawnCards];
    updatePlayerCards(playerDeck, newHand, discardPile);
  };

  playActionCard = event => {
    event.preventDefault();
    if (!this.props.playerTurn.isActive) return;
    if (!this.props.playerTurn.phase === 'Action') return;
    const {
      spendingPower,
      buyingPower,
      actionsProvided,
      cardsToDraw,
      applyActionValues,
      activateCard,
      playerHand,
      card
    } = this.props;

    applyActionValues(spendingPower, buyingPower, actionsProvided);
    cardsToDraw > 0 && this.draw(cardsToDraw);
    console.log(
      'EVENT TARGET ID:',
      event.target.closest('section').getAttribute('id')
    );
    console.log(playerHand);
    activateCard(
      card
      // playerHand.find(
      //   card => card.id == event.target.closest(".section").getAttribute("id")
      // )
    );
  };

  render() {
    const { card } = this.props;
    const actionCard = (
      <Card
        name={card.name}
        desc={card.desc}
        tags={card.tags}
        category={card.category}
        image={card.image}
        cost={card.cost}
        id={card.id}
        key={card.id}
      />
    );
    return (
      <section
        className="ActionCard"
        id={card.id}
        onClick={event => this.playActionCard(event)}
      >
        {actionCard}
      </section>
    );
  }
}

export const mapStateToProps = store => ({
  playerDeck: store.playerDeck,
  playerHand: store.playerHand,
  discardPile: store.discardPile,
  playerTurn: store.playerTurn
});

export const mapDispatchToProps = dispatch => ({
  applyActionValues: (spendingPower, buyingPower, actionsProvided) =>
    dispatch(
      actions.applyActionValues(spendingPower, buyingPower, actionsProvided)
    ),
  updatePlayerCards: (deck, hand, discard) =>
    dispatch(actions.updatePlayerCards(deck, hand, discard)),
  activateCard: card => dispatch(actions.activateCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionCard);
