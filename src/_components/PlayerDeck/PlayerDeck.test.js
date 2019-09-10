import React from "react";
import { PlayerDeck } from "./PlayerDeck";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("<PlayerDeck />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlayerDeck />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
