import * as actions from "./index";

describe("actions", () => {
  it("should have a type of UPDATE_TABLE_CARDS", () => {
    const cards = [{ id: 1 }, { id: 2 }];
    const expectedAction = {
      type: "UPDATE_TABLE_CARDS",
      cards
    };
    const result = actions.updateTableCards(cards);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of UPDATE_PLAYER_CARDS", () => {
    const playerDeck = [{ id: 1 }, { id: 2 }];
    const playerHand = [{ id: 3 }, { id: 4 }];
    const discardPile = [{ id: 5 }, { id: 6 }];
    const expectedAction = {
      type: "UPDATE_PLAYER_CARDS",
      playerDeck,
      playerHand,
      discardPile
    };
    const result = actions.updatePlayerCards(
      playerDeck,
      playerHand,
      discardPile
    );
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of START_TURN", () => {
    const expectedAction = {
      type: "START_TURN"
    };
    const result = actions.beginTurn();
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of END_TURN", () => {
    const expectedAction = {
      type: "END_TURN"
    };
    const result = actions.endTurn();
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of CYCLE_PHASE", () => {
    const phase = "Cleanup";
    const expectedAction = {
      type: "CYCLE_PHASE",
      phase
    };
    const result = actions.cycleToPhase(phase);
    expect(result).toEqual(expectedAction);
  });
});
