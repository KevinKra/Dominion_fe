import React from "react";
import ActivatedCards from "./ActivatedCards";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("<ActivatedCards />", () => {
  let wrapper = shallow(<ActivatedCards />);
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
