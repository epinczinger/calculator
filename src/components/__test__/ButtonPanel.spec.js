import React from "react";
import ButtonPanel from "../ButtonPanel";
import renderer from "react-test-renderer";

describe("ButtonPannel component", () => {
  it("renders as expected matching snapshot", () => {
    const buttonPanel = renderer.create(<ButtonPanel clickHandler={Function}/>).toJSON();
    expect(buttonPanel).toMatchSnapshot();
  });
});
