import React from "react";
import { ActionCards, mapStateToProps } from "./ActionCards";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { cards } from "../../mockData";

describe("<ActionCards />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActionCards tableCards={cards} />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("should return the tableCards at play", () => {
    const mockState = {
      tableCards: [{ id: 1 }, { id: 2 }],
      playerHand: [],
      discardPile: [],
      playerTurn: { isActive: false, phase: "Standby" },
      uselessPropOne: "example",
      uselessPropTwo: "secondExample"
    };
    const expected = {
      tableCards: [{ id: 1 }, { id: 2 }]
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
