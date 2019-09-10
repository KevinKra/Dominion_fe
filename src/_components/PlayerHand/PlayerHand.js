import React from "react";
import "./PlayerHand.scss";
import Card from "../Card/Card";
import { mockTreasureCard } from "../../mockData";
import { mockVictoryCard } from "../../mockData";
import { mockActionCard } from "../../mockData";

export default function PlayerHand() {
  return (
    <section className='PlayerHand'>
      <Card
        name={mockActionCard.name}
        desc={mockActionCard.desc}
        category={mockActionCard.category[0]}
        image={mockActionCard.image}
        cost={mockActionCard.cost}
        id={mockActionCard.id}
        key={mockActionCard.id}
      />
      <Card
        name={mockTreasureCard.name}
        desc={mockTreasureCard.desc}
        category={mockTreasureCard.category[0]}
        image={mockTreasureCard.image}
        cost={mockTreasureCard.cost}
        id={mockTreasureCard.id}
        key={mockTreasureCard.id}
      />
      <Card
        name={mockVictoryCard.name}
        desc={mockVictoryCard.desc}
        category={mockVictoryCard.category[0]}
        image={mockVictoryCard.image}
        cost={mockVictoryCard.cost}
        id={mockVictoryCard.id}
        key={mockVictoryCard.id}
      />
      <Card
        name={mockTreasureCard.name}
        desc={mockTreasureCard.desc}
        category={mockTreasureCard.category[0]}
        image={mockTreasureCard.image}
        cost={mockTreasureCard.cost}
        id={mockTreasureCard.id}
        key={mockTreasureCard.id}
      />
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
