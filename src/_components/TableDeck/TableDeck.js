import React from "react";
import "./TableDeck.scss";
import TreasureCards from "../TreasureCards/TreasureCards";

import VictoryCards from "../VictoryCards/VictoryCards";
import ActionCards from "../ActionCards/ActionCards";

export default function TableDeck() {
  return (
    <section className='TableDeck'>
      <VictoryCards />
      <ActionCards />
      <TreasureCards />
    </section>
  );
}
