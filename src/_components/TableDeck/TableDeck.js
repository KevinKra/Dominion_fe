import React, { Component } from "react";
import TreasureCards from "../TreasureCards/TreasureCards";
import VictoryCards from "../VictoryCards/VictoryCards";
import ActionCards from "../ActionCards/ActionCards";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions/index";
import "./TableDeck.scss";

export class TableDeck extends Component {
  componentDidMount() {
    //Update this for fetching from an endpoint
    this.props.updateTableCards(this.props.tableCards);
  }

  buyCard = e => {
    if (this.props.buyingPower < 1) return;
    const clickedName = e.target.closest("article").getAttribute("data-name");
    const matchingStack = this.props.tableCards.find(tableCard => {
      return tableCard.name === clickedName;
    });
    // console.log("matchingStack", matchingStack);
    if (this.props.spendingPower < matchingStack.cost) {
      return console.log("not enough money to buy");
    } else {
      const boughtId = matchingStack.id_list.pop();
      this.props.spendTreasure(matchingStack.cost);
      this.props.bought(boughtId);
      this.props.useBuy();
    }
  };

  render() {
    return (
      <section className='TableDeck'>
        <VictoryCards buyCard={this.buyCard} />
        <ActionCards buyCard={this.buyCard} />
        <TreasureCards buyCard={this.buyCard} />
      </section>
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
  useBuy: () => dispatch(actions.useBuy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDeck);
