import React from "react";
import Card from "../Card/Card";
import { mockTreasureCard } from "../../mockData";
import "./DiscardPile.scss";

export default function DiscardPile() {
  return (
    <section className='DiscardPile'>
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
