export const mockActionCard = {
  name: "Village",
  tags: ["+1 Card", "+2 Actions"],
  desc: "",
  category: ["Action"],
  cost: 3,
  spendingPower: 0,
  actionsProvided: 2,
  cardsToDraw: 1,
  image: "Village.jpg",
  id: 1231
};

export const mockTreasureCard = {
  name: "Copper",
  category: ["Treasure"],
  cost: 0,
  image: "Copper.jpg",
  spendingPower: 1,
  id: 1113
};

export const mockVictoryCard = {
  name: "Province",
  category: ["Victory"],
  cost: 8,
  image: "Province.jpg",
  victoryPoints: 6,
  id: 3781
};

export const mockGameState = {
  tableDeck: [
    {
      name: "Gold",
      category: ["Money"],
      cost: 6,
      victoryPoints: 0,
      spendingPower: 3,
      buyingPower: 0,
      actionsProvided: 3,
      cardsToDraw: 0,
      image: "./gold.jpg",
      desc: "",
      tags: [],
      countAvailable: 5,
      id_list: [1011, 1012, 1013, 1014, 1015]
    },
    {
      name: "Estate",
      category: ["Victory"],
      cost: 2,
      victoryPoints: 1,
      spendingPower: 0,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "./estate.jpg",
      desc: "",
      tags: [],
      countAvailable: 8,
      id_list: [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048]
    }
  ],
  playerOrder: ["Player_1_Name", "Player_2_Name"],
  playerInfo: {
    Player_1_Name: {
      deckSize: 10,
      topCardDiscard: 0,
      handSize: 5
    },
    Player_2_Name: {
      deckSize: 10,
      topCardDiscard: 0,
      handSize: 5
    }
  },
  activePlayerName: "Player_1_Name",
  activePlayerId: 1,
  cards: [
    {
      name: "Village",
      tags: ["+1 Card", "+2 Actions"],
      desc: "",
      category: ["Action"],
      cost: 3,
      spendingPower: 0,
      actionsProvided: 2,
      cardsToDraw: 1,
      image: "Village.jpg",
      id: 1231
    },
    {
      name: "Militia",
      tags: ["+2 Gold"],
      desc: "Each other player discards down to 3 cards in his hand.",
      category: ["Action", "Attack"],
      cost: 4,
      spendingPower: 2,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "Militia.jpg",
      id: 1391
    },
    {
      name: "Smithy",
      tags: ["+3 Cards"],
      desc: "",
      category: ["Action"],
      cost: 4,
      spendingPower: 0,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 3,
      image: "Smithy.jpg",
      id: 9531
    },
    {
      name: "Market",
      tags: ["+1 Card", "+1 Action", "+1 Buy", "+1 Gold"],
      desc: "",
      category: ["Action"],
      cost: 5,
      spendingPower: 1,
      buyingPower: 1,
      actionsProvided: 1,
      cardsToDraw: 1,
      image: "Market.jpg",
      id: 1532
    },
    {
      name: "Mine",
      tags: [],
      desc:
        "Trash a treasure Card from your hand. Gain a treasure card costing up to 3 treasure more; put it in your hand.",
      category: ["Action"],
      cost: 5,
      spendingPower: 0,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "Mine.jpg",
      id: 1522
    },
    {
      name: "Remodel",
      tags: [],
      desc:
        "Trash a card from your hand. Gain a card costing up to 2 treasure more than the trashed card.",
      category: ["Action"],
      cost: 4,
      spendingPower: 0,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "Remodel.jpg",
      id: 3333
    },
    {
      name: "Cellar",
      tags: ["+1 Action"],
      desc: "Discard any number of cards. +1 Card per card discarded.",
      category: ["Action"],
      cost: 2,
      spendingPower: 0,
      buyingPower: 0,
      actionsProvided: 1,
      cardsToDraw: 0,
      image: "Cellar.jpg",
      id: 9831
    },
    {
      name: "Moat",
      tags: ["+2 Cards"],
      desc:
        "When another player plays an Attack card, you may reveal this from your hand. If you do, you are unaffected by that attack.",
      category: ["Action", "Reaction"],
      cost: 2,
      spendingPower: 0,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 2,
      image: "Moat.jpg",
      id: 1938
    },
    {
      name: "WoodCutter",
      tags: ["+1 Buy", "+2 Gold"],
      desc: "",
      category: ["Action"],
      cost: 3,
      spendingPower: 2,
      buyingPower: 1,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "WoodCutter.jpg",
      id: 9781
    },
    {
      name: "WorkShop",
      tags: [],
      desc: "Gain a card costing up to 4 treasure.",
      category: ["Action"],
      cost: 3,
      spendingPower: 0,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "Workshop.jpg",
      id: 1333
    },
    {
      name: "Gold",
      category: ["Treasure"],
      cost: 6,
      image: "Gold.jpg",
      spendingPower: 3,
      id: 1515
    },
    {
      name: "Silver",
      category: ["Treasure"],
      cost: 3,
      image: "Silver.jpg",
      spendingPower: 2,
      id: 8923
    },
    {
      name: "Copper",
      category: ["Treasure"],
      cost: 0,
      image: "Copper.jpg",
      spendingPower: 1,
      id: 1113
    },
    {
      name: "Estate",
      category: ["Victory"],
      cost: 2,
      image: "Estate.jpg",
      victoryPoints: 1,
      id: 6123
    },
    {
      name: "Duchy",
      category: ["Victory"],
      cost: 5,
      image: "Duchy.jpg",
      victoryPoints: 3,
      id: 1344
    },
    {
      name: "Province",
      category: ["Victory"],
      cost: 8,
      image: "Province.jpg",
      victoryPoints: 6,
      id: 3781
    }
  ]
};

export const mockPlayerData = {
  playerId: 1,
  deck: [
    {
      name: "Copper",
      category: ["Money"],
      cost: 0,
      victoryPoints: 0,
      spendingPower: 1,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "copper.jpg",
      desc: "",
      tags: []
    },
    {
      name: "Copper",
      category: ["Money"],
      cost: 0,
      victoryPoints: 0,
      spendingPower: 1,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "copper.jpg",
      desc: "",
      tags: []
    },
    {
      name: "Copper",
      category: ["Money"],
      cost: 0,
      victoryPoints: 0,
      spendingPower: 1,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "copper.jpg",
      desc: "",
      tags: []
    },
    {
      name: "Copper",
      category: ["Money"],
      cost: 0,
      victoryPoints: 0,
      spendingPower: 1,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "copper.jpg",
      desc: "",
      tags: []
    },
    {
      name: "Copper",
      category: ["Money"],
      cost: 0,
      victoryPoints: 0,
      spendingPower: 1,
      buyingPower: 0,
      actionsProvided: 0,
      cardsToDraw: 0,
      image: "copper.jpg",
      desc: "",
      tags: []
    }
  ],
  discard: [
    {
      name: "Market",
      category: "Action",
      cost: 5,
      victoryPoints: 0,
      spendingPower: 1,
      buyingPower: 1,
      actionsProvided: 1,
      cardsToDraw: 1,
      image: "market.jpg",
      desc: "",
      tags: ["+1 Card", "+1 Action", "+1 Buy", "+1 Gold"]
    }
  ]
};

// const boughtCards = [
//   { name: "Village", amountBought: 2 },
//   { name: "Mine", amountBought: 1 }
// ];
