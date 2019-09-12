import React from "react";
import { shallow } from "enzyme";
import { ActionCard, mapStateToProps, mapDispatchToProps } from "./ActionCard";

describe("ActionCard", () => {
  let wrapper, instance, props;
  beforeEach(() => {
    props = {
      card: {
        name: "card",
        desc: "desc",
        tags: [],
        category: "cat",
        image: "..link",
        cost: 0,
        id: 1,
        key: 1
      }
    };
    wrapper = shallow(<ActionCard {...props} />);
    instance = wrapper.instance();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be able to draw cards", () => {
    instance.draw = jest.fn();
    instance.draw(2);
    expect(instance.draw).toHaveBeenCalledWith(2);
  });

  it("should be able to play action cards on click", () => {
    instance.playActionCard = jest.fn();
    wrapper.find(".ActionCard").simulate("click");
    expect(instance.playActionCard).toHaveBeenCalled();
  });
});

describe("mapStateToProps", () => {
  it("should return the player deck, hand, discardPile, and turn object", () => {
    const mockState = {
      playerDeck: [{ id: 1 }, { id: 2 }],
      playerHand: [],
      discardPile: [],
      playerTurn: { isActive: false, phase: "Standby" },
      uselessPropOne: "example",
      uselessPropTwo: "secondExample"
    };
    const expected = {
      playerDeck: [{ id: 1 }, { id: 2 }],
      playerHand: [],
      discardPile: [],
      playerTurn: { isActive: false, phase: "Standby" }
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
