import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import "./ActivatedCards.scss";

export function ActivatedCards(props) {
  return (
    <section className='ActivatedCards'>
      {props.activatedCards.map(card => {
        return (
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
      })}
    </section>
  );
}

export const mapStateToProps = state => ({
  activatedCards: state.activatedCards
});

export default connect(mapStateToProps)(ActivatedCards);
