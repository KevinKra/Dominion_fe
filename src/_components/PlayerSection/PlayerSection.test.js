import React from "react";
import PlayerSection from "./PlayerSection";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("<PlayerSection />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlayerSection />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
