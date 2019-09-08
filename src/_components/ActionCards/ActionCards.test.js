import React from "react";
import { ActionCards } from "./ActionCards";
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
