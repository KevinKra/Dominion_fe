import React, { Component } from "react";
import "./TreasureCards.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";

export class TreasureCards {
  render() {
    const treasureCards = this.props.tableCards
      .filter(card => card.category.includes("Treasure"))
      .map(card => (
        <Card
          name={card.name}
          desc={card.desc}
          category={card.category}
          image={card.image}
          cost={card.cost}
          id={card.id}
          key={card.id}
        />
      ));
    return (
      <section className="TreasureCards side-shelf">{treasureCards}</section>
    );
  }
}

const mapStateToProps = store => ({
  tableCards: store.tableCards
});

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(mapStateToProps)(TreasureCards);
