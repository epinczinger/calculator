import React from "react";
import Display from "../Display";
import renderer from "react-test-renderer";

describe("The Display", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer
      .create(<Display next={1} total='3' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
