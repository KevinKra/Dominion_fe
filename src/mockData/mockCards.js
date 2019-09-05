export const cards = [
  {
    name: "Village",
    desc: "+1 Card +2 Actions",
    type: "Action",
    cost: 3,
    spendingPower: 0,
    actionsProvided: 2,
    cardsToDraw: 1,
    image: "Village.jpg",
    id: 123123
  },
  {
    name: "Gold",
    type: "Treasure",
    cost: 6,
    image: "Gold.jpg",
    spendingPower: 3
  },
  {
    name: "Silver",
    type: "Treasure",
    cost: 3,
    image: "Silver.jpg",
    spendingPower: 2
  },
  {
    name: "Copper",
    type: "Treasure",
    cost: 0,
    image: "Copper.jpg",
    spendingPower: 1
  },
  {
    name: "Estate",
    type: "Victory",
    cost: 2,
    image: "Estate.jpg",
    victoryPoints: 1
  },
  {
    name: "Duchy",
    type: "Victory",
    cost: 5,
    image: "Duchy.jpg",
    victoryPoints: 3
  },
  {
    name: "Province",
    type: "Victory",
    cost: 8,
    image: "Province.jpg",
    victoryPoints: 6
  }
];

const boughtCards = [
  { name: "Village", amountBought: 2 },
  { name: "Mine", amountBought: 1 }
];
