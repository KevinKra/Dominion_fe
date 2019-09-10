import React, { Component } from "react";
import PlayerSection from "../PlayerSection/PlayerSection";
import TableDeck from "../TableDeck/TableDeck";
import "./GamePage.scss";

export default class GamePage extends Component {
  render() {
    return (
      <div className='GamePage'>
        <TableDeck />
        <PlayerSection />
      </div>
    );
  }
}
