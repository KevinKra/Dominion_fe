import React from "react";
import { TreasureCards } from "./TreasureCards";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { cards } from "../../mockData/mockCards";

describe("<TreasureCard />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TreasureCards tableCards={cards} />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
