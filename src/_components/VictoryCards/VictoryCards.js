import React from "react";
import Card from "../Card/Card";
import "./VictoryCards.scss";
import { connect } from "react-redux";

export function VictoryCards(props) {
  const victoryCards = props.tableCards
    .filter(card => card.category.includes("Victory"))
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
    <section className='VictoryCards side-shelf' onClick={e => props.buyCard(e)}>
      {victoryCards}
    </section>
  );
}

const mapStateToProps = store => ({
  tableCards: store.tableCards
});

export default connect(mapStateToProps)(VictoryCards);
