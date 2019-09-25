import React, { Component } from 'react';
import TreasureCards from '../TreasureCards/TreasureCards';
import VictoryCards from '../VictoryCards/VictoryCards';
import ActionCards from '../ActionCards/ActionCards';
import Notification from '../Notification/Notification';
import { connect } from 'react-redux';
import * as actions from '../../_redux/actions/index';
import './TableDeck.scss';

export class TableDeck extends Component {
  componentDidMount() {
    this.props.updateTableCards(this.props.tableCards);
  }

  buyCard = e => {
    if (this.props.buyingPower < 1) return;
    const clickedName = e.target.closest('article').getAttribute('data-name');
    const matchingStack = this.props.tableCards.find(tableCard => {
      return tableCard.name === clickedName;
    });
    if (this.props.spendingPower < matchingStack.cost) {
      return console.log('not enough money to buy');
    } else {
      const boughtId = matchingStack.id_list.pop();
      this.props.boughtCard(clickedName);
      this.props.spendTreasure(matchingStack.cost);
      this.props.bought(boughtId);
      this.props.useBuy();
    }
  };

  render() {
    return (
      this.props.tableCards.length !== 0 && (
        <section className="TableDeck">
          <Notification />
          <VictoryCards buyCard={this.buyCard} />
          <ActionCards buyCard={this.buyCard} />
          <TreasureCards buyCard={this.buyCard} />
        </section>
      )
    );
  }
}

const mapStateToProps = state => ({
  tableCards: state.tableCards,
  spendingPower: state.spendingPower,
  buyingPower: state.buyingPower
});

const mapDispatchToProps = dispatch => ({
  updateTableCards: cards => dispatch(actions.updateTableCards(cards)),
  spendTreasure: value => dispatch(actions.spendTreasure(value)),
  bought: id => dispatch(actions.bought(id)),
  boughtCard: cardName => dispatch(actions.boughtCard(cardName)),
  useBuy: () => dispatch(actions.useBuy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDeck);
