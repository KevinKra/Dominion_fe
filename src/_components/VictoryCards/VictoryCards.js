import React from "react";
import Card from "../Card/Card";
import "./VictoryCards.scss";
import { connect } from "react-redux";

export function VictoryCards(props) {
  return (
    <section className='VictoryCards'>
      {props.tableCards
        .filter(card => card.type.includes("Victory"))
        .map(card => (
          <Card
            name={card.name}
            desc={card.desc}
            type={card.type}
            image={card.image}
            cost={card.cost}
            id={card.id}
            key={card.id}
          />
        ))}
    </section>
  );
}

const mapStateToProps = store => ({
  tableCards: store.tableCards
});

export default connect(mapStateToProps)(VictoryCards);
