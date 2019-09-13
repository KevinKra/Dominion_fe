import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import * as SVGLoaders from "svg-loaders-react";
import "./ActivatedCards.scss";

export function ActivatedCards(props) {
  const turnNotifier = props.playerTurn.isActive ? (
    <p
      className={
        props.activatedCards.length === 0 ? "turn-notifier" : "turn-notifier-void"
      }
    >
      It's Your Turn!
    </p>
  ) : (
    <div className='waiting-response'>
      <p className='turn-notifier'>Waiting For Opponent</p>
      <SVGLoaders.ThreeDots className='turn-loader' />
    </div>
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
