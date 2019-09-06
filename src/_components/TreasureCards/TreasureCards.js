import React from "react";
import "./TreasureCards.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";

export function TreasureCards(props) {
  return (
    <section className='TreasureCards'>
      {props.tableCards
        .filter(card => card.type.includes("Treasure"))
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

export default connect(mapStateToProps)(TreasureCards);
