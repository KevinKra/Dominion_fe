import React from "react";
import { VictoryCards } from "./VictoryCards";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { cards } from "../../mockData/mockCards";

describe("<Victory />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<VictoryCards tableCards={cards} />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
