import React from "react";
import "./PlayerSection.scss";
import PlayerDeck from "../PlayerDeck/PlayerDeck";
import PlayerHand from "../PlayerHand/PlayerHand";
import ActivatedCards from "../ActivatedCards/ActivatedCards";

export default function PlayerSection() {
  return (
    <section className='PlayerSection'>
      <ActivatedCards />
      <PlayerDeck />
      <PlayerHand />
    </section>
  );
}
