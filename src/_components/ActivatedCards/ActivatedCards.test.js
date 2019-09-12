import React from "react";
import { ActivatedCards } from "./ActivatedCards";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { cards } from "../../mockData";

describe("<ActivatedCards />", () => {
  let wrapper = shallow(<ActivatedCards activatedCards={cards} playerTurn={true} />);
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
