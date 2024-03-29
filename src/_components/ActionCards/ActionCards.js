import React from 'react';
import './ActionCards.scss';
import Card from '../Card/Card';
import { connect } from 'react-redux';

export function ActionCards(props) {
  const actionCards = props.tableCards
    .filter(card => card.category.includes('Action'))
    .map(card => (
      <Card
        name={card.name}
        desc={card.desc}
        tags={card.tags}
        category={card.category}
        image={card.image}
        cost={card.cost}
        id={card.id}
        key={card.id}
      />
    ));
  console.log('TableDeck Action Cards:', props);
  return (
    <section className="ActionCards" onClick={e => props.buyCard(e)}>
      {actionCards}
    </section>
  );
}

export const mapStateToProps = store => ({
  tableCards: store.tableCards
});

export default connect(mapStateToProps)(ActionCards);
