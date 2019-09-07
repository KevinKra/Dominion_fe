import React, { Component } from "react";
import "./TableDeck.scss";
import TreasureCards from "../TreasureCards/TreasureCards";
import VictoryCards from "../VictoryCards/VictoryCards";
import ActionCards from "../ActionCards/ActionCards";
import { cards } from "../../mockData/mockCards";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions/index";

export class TableDeck extends Component {
  componentDidMount() {
    //Update this for fetching from an endpoint
    this.props.updateTableCards(cards);
  }
  render() {
    return (
      <section className='TableDeck'>
        <VictoryCards />
        <ActionCards />
        <TreasureCards />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTableCards: cards => dispatch(actions.updateTableCards(cards))
});

export default connect(
  null,
  mapDispatchToProps
)(TableDeck);
