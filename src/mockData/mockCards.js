export const cards = [
  {
    name: "Village",
    desc: "+1 Card +2 Actions",
    type: "Action",
    cost: 3,
    spendingPower: 0,
    actionsProvided: 2,
    cardsToDraw: 1,
    image: "../assets/card_images/Village.jpg",
    id: 123123
  },
  {
    name: "Gold",
    type: "Treasure",
    cost: 6,
    spendingPower: 3
  },
  {
    name: "Duchy",
    type: "Victory",
    cost: 5,
    victoryPoints: 3
  }
];

const boughtCards = [
  { name: "Village", amountBought: 2 },
  { name: "Mine", amountBought: 1 }
];
