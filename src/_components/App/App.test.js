import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("<App />", () => {
  let wrapper = shallow(<App />);
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
