import React from "react";
import Card from "../Card/Card";
import "./VictoryCards.scss";
import { connect } from "react-redux";

export function VictoryCards(props) {
  return (
    <section className='VictoryCards'>
      {props.tableCards
        .filter(card => {
          return card.type === "Victory";
        })
        .map(card => (
          <Card
            name={card.name}
            type={card.type}
            image={card.image}
            cost={card.cost}
            victoryPoints={card.victoryPoints}
          />
        ))}
    </section>
  );
}

const mapStateToProps = store => ({
  tableCards: store.tableCards
});

export default connect(mapStateToProps)(VictoryCards);
