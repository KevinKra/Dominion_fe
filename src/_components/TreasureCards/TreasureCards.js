import React from "react";
import "./TreasureCards.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";

export function TreasureCards(props) {
  return (
    <section className='TreasureCards'>
      {props.tableCards
        .filter(card => {
          return card.type === "Treasure";
        })
        .map(card => (
          <Card
            name={card.name}
            type={card.type}
            image={card.image}
            cost={card.cost}
            spendingPower={card.spendingPower}
          />
        ))}
    </section>
  );
}

const mapStateToProps = store => ({
  tableCards: store.tableCards
});

export default connect(mapStateToProps)(TreasureCards);
