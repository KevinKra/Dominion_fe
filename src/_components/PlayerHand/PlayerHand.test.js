import React from "react";
import PlayerHand from "./PlayerHand";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("<PlayerHand />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlayerHand />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
