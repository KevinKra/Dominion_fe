import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import "./ActivatedCards.scss";

export function ActivatedCards(props) {
  const turnNotifier = props.playerTurn.isActive ? (
    <p className='turn-notifier'>"Your Turn!"</p>
  ) : (
    <p className='turn-notifier'>"Waiting For Opponent"</p>
  );
  return (
    <section className='ActivatedCards'>
      {turnNotifier}
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
  playerTurn: state.playerTurn,
  activatedCards: state.activatedCards
});

export default connect(mapStateToProps)(ActivatedCards);
