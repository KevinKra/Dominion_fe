import React from "react";
import { TableDeck } from "./TableDeck";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("<TableDeck />", () => {
  let wrapper;
  const mockUpdateTableCards = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <TableDeck updateTableCards={mockUpdateTableCards} tableCards={1} />
    );
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
