import React, { Component } from "react";
import * as actions from "../../_redux/actions";
// import "./TreasureCard.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";

export class TreasureCard extends Component {
  playTreasure = event => {
    console.log(event.target.id);
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
        className="TreasureCards side-shelf"
        onClick={event => this.playTreasure(event)}
        id={card.id}
      >
        {treasureCard}
      </section>
    );
  }
}

// const mapStateToProps = store => ({
//   tableCards: store.tableCards
// });

const mapDispatchToProps = dispatch => ({
  addTreasure: value => dispatch(actions.addTreasure(value)),
  activateCard: card => dispatch(actions.activateCard(card))
});

export default connect(
  null,
  mapDispatchToProps
)(TreasureCards);
