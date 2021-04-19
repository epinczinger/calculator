import React from "react";
import Home from "../Home";
import renderer from "react-test-renderer";

describe("The Home", () => {
  it("renders as expected matching snapshot", () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
