import React from "react";
import { PlayerHand } from "./PlayerHand";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { cards } from "../../mockData";

describe("<PlayerHand />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlayerHand playerHand={cards} />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
