import React, { Component } from "react";
import * as actions from "../../_redux/actions";
import Card from "../Card/Card";
import { connect } from "react-redux";
import "./TreasureCard.scss";

export class TreasureCard extends Component {
  playTreasure = e => {
    e.preventDefault();
    if (!this.props.playerTurn.isActive) return;
    this.props.activateCard(this.props.card);
    this.props.addTreasure(this.props.card.spendingPower);
  };

  render() {
    const { card } = this.props;
    const treasureCard = (
      <Card
        name={card.name}
        desc={card.desc}
        category={card.category}
        image={card.image}
        cost={card.cost}
        id={card.id}
        key={card.id}
      />
    );

    return (
      <section
        className='TreasureCard'
        onClick={e => this.playTreasure(e)}
        key={card.id}
        id={card.id}
      >
        {treasureCard}
      </section>
    );
  }
}

const mapStateToProps = store => ({
  playerTurn: store.playerTurn
});

const mapDispatchToProps = dispatch => ({
  addTreasure: value => dispatch(actions.addTreasure(value)),
  activateCard: card => dispatch(actions.activateCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreasureCard);
