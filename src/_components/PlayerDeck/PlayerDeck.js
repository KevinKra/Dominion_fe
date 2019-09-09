import React from "react";
import "./PlayerDeck.scss";
import Card from "../Card/Card";
import { mockTreasureCard } from "../../mockData";

export default function PlayerDeck() {
  return (
    <section className='PlayerDeck'>
      <Card
        name={mockTreasureCard.name}
        desc={mockTreasureCard.desc}
        category={mockTreasureCard.category[0]}
        image={mockTreasureCard.image}
        cost={mockTreasureCard.cost}
        id={mockTreasureCard.id}
        key={mockTreasureCard.id}
      />
    </section>
  );
}
