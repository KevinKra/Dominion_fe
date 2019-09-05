import React from "react";
import "./ActionCards.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";

export function ActionCards(props) {
  return (
    <section className='ActionCards'>
      {props.tableCards
        .filter(card => {
          return card.type === "Action";
        })
        .map(card => (
          <Card
            name={card.name}
            desc={card.desc}
            type={card.type}
            image={card.image}
            cost={card.cost}
          />
        ))}
    </section>
  );
}

const mapStateToProps = store => ({
  tableCards: store.tableCards
});

export default connect(mapStateToProps)(ActionCards);
