import React from "react";
import "./ActionCards.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";

export function ActionCards(props) {
  return (
    <section className='ActionCards'>
      {props.tableCards
        .filter(card => card.type.includes("Action"))
        .map(card => (
          <Card
            name={card.name}
            desc={card.desc}
            tags={card.tags}
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

export default connect(mapStateToProps)(ActionCards);
